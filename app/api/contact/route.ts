import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  company: z.string().trim().min(1, '회사명을 입력해 주세요.'),
  name: z.string().trim().min(1, '담당자명을 입력해 주세요.'),
  email: z.string().trim().email('유효한 이메일 주소를 입력해 주세요.'),
  phone: z.string().optional().default(''),
  type: z.string().min(1, '문의 유형을 선택해 주세요.'),
  timeline: z.string().optional().default(''),
  message: z.string().trim().min(1, '프로젝트 내용을 입력해 주세요.'),
  consent: z.boolean().refine((val) => val === true, {
    message: '개인정보 수집 및 이용에 동의해야 합니다.',
  }),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: '입력값이 올바르지 않습니다.',
          details: result.error.flatten(),
        },
        { status: 400 },
      )
    }

    const { company, name, email, phone, type, timeline, message } = result.data

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'tobetheone@tobetheone.kr'
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT) || 465
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const smtpFrom = process.env.SMTP_FROM || `"TOBETHEONE 웹사이트" <${receiverEmail}>`

    const now = new Date()
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
      dateStyle: 'full',
      timeStyle: 'medium',
      timeZone: 'Asia/Seoul',
    }).format(now)

    const emailSubject = `[TOBETHEONE 문의] ${company} - ${name}님의 프로젝트 문의가 접수되었습니다.`

    const emailText = `
[주식회사 투비더원 (TOBETHEONE) 홈페이지 문의 접수]

■ 회사명: ${company}
■ 담당자명: ${name}
■ 이메일: ${email}
■ 연락처: ${phone || '미입력'}
■ 문의 유형: ${type}
■ 희망 일정: ${timeline || '미입력'}
■ 접수 일시: ${formattedDate}

--------------------------------------------------
[프로젝트 내용]
${message}
--------------------------------------------------

* 본 메일은 tobetheone.co.kr 홈페이지의 문의하기 폼에서 발송되었습니다.
* 이 메일에 바로 [답장]하시면 문의자(${email})에게 직접 회신됩니다.
    `.trim()

    const emailHtml = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${emailSubject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f6f9; font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Pretendard', Roboto, 'Segoe UI', sans-serif; color: #111827;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f4f6f9; padding: 40px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" max-width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); border: 1px solid #e5e7eb;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #000000; padding: 28px 32px; border-bottom: 2px solid #20C5E8;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; font-size: 18px; font-weight: 800; letter-spacing: 0.16em; color: #ffffff;">
                      TOBETHEONE
                    </span>
                    <span style="display: block; margin-top: 4px; font-size: 12px; color: #20C5E8; font-weight: 600; letter-spacing: 0.05em;">
                      신규 프로젝트 문의 접수
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #111827;">
                ${company} <span style="font-weight: 400; color: #6b7280;">(${name} 담당자님)</span>
              </h2>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #4b5563; line-height: 1.6;">
                홈페이지를 통해 새로운 프로젝트 상담 문의가 접수되었습니다.<br>
                아래 세부 내용을 확인하시고 고객에게 회신해 주시기 바랍니다.
              </p>

              <!-- Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; width: 110px; font-size: 13px; font-weight: 600; color: #4b5563;">회사명</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #111827;">${company}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; font-weight: 600; color: #4b5563;">담당자명</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; font-weight: 600; color: #4b5563;">이메일</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #2563eb;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; font-weight: 600; color: #4b5563;">연락처</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${phone || '<span style="color: #9ca3af;">미입력</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; font-weight: 600; color: #4b5563;">문의 유형</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #2563eb;">
                    <span style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; padding: 3px 8px; border-radius: 4px; font-size: 13px;">${type}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 13px; font-weight: 600; color: #4b5563;">희망 일정</td>
                  <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #111827;">${timeline || '<span style="color: #9ca3af;">미입력</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px; font-size: 13px; font-weight: 600; color: #4b5563;">접수 일시</td>
                  <td style="padding: 12px 16px; font-size: 13px; color: #6b7280;">${formattedDate}</td>
                </tr>
              </table>

              <!-- Project Message Box -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; color: #111827;">프로젝트 상세 내용</h3>
                <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-left: 4px solid #2563eb; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.7; color: #374151; white-space: pre-wrap; word-break: break-word;">${message}</div>
              </div>

              <!-- Reply Action Button -->
              <div style="text-align: center; margin-top: 32px;">
                <a href="mailto:${email}?subject=${encodeURIComponent(`[TOBETHEONE] ${company} 프로젝트 문의 회신드립니다.`)}" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-size: 14px; font-weight: 600; box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);">
                  고객에게 이메일로 바로 회신하기
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 20px 32px; border-top: 1px solid #e5e7eb; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                본 메일은 <strong>주식회사 투비더원(TOBETHEONE)</strong> 공식 홈페이지에서 자동으로 발송된 메일입니다.<br>
                수신 메일함에서 바로 <strong>[답장]</strong>을 누르시면 문의자(${email})에게 전달됩니다.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim()

    // SMTP 계정 정보가 설정되어 있는 경우 실제 이메일 발송
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // 465는 true, 587 등은 false
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })

      await transporter.sendMail({
        from: smtpFrom,
        to: receiverEmail,
        replyTo: `"${name}" <${email}>`,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      })

      console.log(`[Contact Mail Sent] Success to ${receiverEmail} from ${email} (${company})`)
    } else {
      // SMTP 설정이 아직 없는 개발/테스트 환경에서는 로그 출력 후 정상 처리
      console.log('====================================================')
      console.log('[Mock Contact Mail] SMTP 환경변수가 설정되지 않아 콘솔에 시뮬레이션 출력합니다.')
      console.log(`To: ${receiverEmail}`)
      console.log(`Reply-To: ${name} <${email}>`)
      console.log(`Subject: ${emailSubject}`)
      console.log('Body Preview:\n', emailText)
      console.log('====================================================')
    }

    return NextResponse.json({
      success: true,
      message: '문의가 성공적으로 접수되었습니다.',
    })
  } catch (error: any) {
    console.error('[Contact API Error]:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || '이메일 발송 처리 중 오류가 발생했습니다.',
      },
      { status: 500 },
    )
  }
}
