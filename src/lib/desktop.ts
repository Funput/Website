export const DESKTOP = {
  macos: {
    title: 'Funput cho macOS — Bộ gõ tiếng Việt Telex & VNI trên Mac',
    description:
      'Tải Funput cho Mac miễn phí. Bộ gõ tiếng Việt Telex, VNI cho macOS 26 trở lên, hỗ trợ Apple Silicon và Intel. Cài bằng .pkg hoặc .app.zip, mã nguồn mở.',
    headline: 'Gõ tiếng Việt.',
    accent: 'Rất Mac.',
    lead: 'Một bộ gõ thân thuộc, trong một trải nghiệm rất Mac. Telex và VNI hòa vào nhịp làm việc hằng ngày của bạn.',
    os: 'macOS 26 (Tahoe) trở lên',
    requirements:
      'Apple Silicon hoặc Intel. Bản .pkg cần quyền admin; bản .app.zip có thể cài cho tài khoản hiện tại.',
    features: [
      [
        'Tích hợp vào macOS',
        'Chọn Funput trong nguồn nhập của hệ thống và chuyển bộ gõ bằng phím tắt quen thuộc.',
      ],
      [
        'Telex, Telex+ & VNI',
        'Chọn kiểu gõ bạn thích, gõ tiếng Việt và chuyển mã giữa Unicode, TCVN3 hoặc VNI-Windows.',
      ],
      [
        'Hai cách cài trên Mac',
        'Dùng gói .pkg cho máy có quyền admin hoặc .app.zip để cài riêng cho tài khoản của bạn.',
      ],
    ],
    steps: [
      [
        'Tải bản dành cho Mac',
        'Mở GitHub Releases, chọn tệp .pkg hoặc .app.zip của bản phát hành bạn muốn cài.',
      ],
      [
        'Cài và thêm nguồn nhập',
        'Làm theo tài liệu cài đặt, sau đó mở System Settings → Keyboard → Input Sources → Vietnamese và thêm Funput.',
      ],
      [
        'Chuyển sang Funput',
        'Chọn Funput trong menu nguồn nhập và chọn Telex hoặc VNI. Nếu chưa thấy Funput, đăng xuất rồi đăng nhập lại.',
      ],
    ],
    questions: [
      [
        'Funput có chạy trên Mac Intel không?',
        'Có. Bản macOS là universal binary cho cả Apple Silicon và Intel; yêu cầu macOS 26 (Tahoe) trở lên.',
      ],
      [
        'Cài Funput trên Mac có cần quyền admin không?',
        'Gói .pkg cần quyền admin. Nếu dùng tài khoản Standard, chọn .app.zip và làm theo hướng dẫn cài cho tài khoản hiện tại.',
      ],
    ],
  },
  windows: {
    title: 'Funput cho Windows 10 & 11 — Bộ gõ tiếng Việt miễn phí',
    description:
      'Tải Funput cho Windows 10 và Windows 11. Bộ gõ tiếng Việt Telex, VNI miễn phí, mã nguồn mở, bản .exe portable cho x86-64. Hỗ trợ Windows 10 từ phiên bản 1809.',
    headline: 'Mở lên.',
    accent: 'Gõ tiếng Việt.',
    lead: 'Từ dòng tin nhắn đến trang tài liệu. Funput mang Telex và VNI đến Windows, gọn trong một ứng dụng ở khay hệ thống.',
    os: 'Windows 10 phiên bản 1809 trở lên · Windows 11',
    requirements:
      'Bản x86-64, một tệp .exe portable. Windows on ARM chạy qua mô phỏng; chưa có bản ARM riêng.',
    features: [
      [
        'Một tệp, bắt đầu ngay',
        'Bản .exe portable hoạt động từ khay hệ thống. Không cần thêm nguồn nhập vào Windows.',
      ],
      [
        'Kiểu gõ quen tay',
        'Hỗ trợ Telex, Telex+ và VNI; chuyển mã văn bản giữa Unicode, TCVN3 và VNI-Windows.',
      ],
      [
        'Theo nhịp làm việc',
        'Giao diện riêng cho Windows, với tùy chọn khởi động cùng máy để bộ gõ luôn sẵn sàng.',
      ],
    ],
    steps: [
      [
        'Tải Funput.exe',
        'Mở GitHub Releases và chọn tệp .exe dành cho Windows. Lưu vào thư mục bạn muốn giữ ứng dụng.',
      ],
      [
        'Mở ứng dụng',
        'Chạy Funput.exe. Funput xuất hiện ở khay hệ thống để bạn mở cài đặt và điều khiển bộ gõ.',
      ],
      [
        'Chọn kiểu gõ',
        'Chọn Telex hoặc VNI rồi thử gõ tiếng Việt. Bạn có thể bật khởi động cùng Windows trong cài đặt.',
      ],
    ],
    questions: [
      [
        'Funput hỗ trợ Windows nào?',
        'Funput hỗ trợ Windows 10 từ phiên bản 1809 (build 17763) và Windows 11. Bản phát hành dành cho x86-64.',
      ],
      [
        'Có cần cài đặt bằng MSI không?',
        'Không. Bản Windows hiện được phát hành dưới dạng .exe portable, chưa có bộ cài MSI.',
      ],
    ],
  },
  linux: {
    title: 'Funput cho Linux — Bộ gõ tiếng Việt Fcitx5 & IBus',
    description:
      'Cài Funput cho Linux: bộ gõ tiếng Việt Telex, VNI với Fcitx5 hoặc IBus. Hỗ trợ Ubuntu, Debian, Fedora, openSUSE và Arch trên x86-64. Miễn phí, mã nguồn mở.',
    headline: 'Linux của bạn.',
    accent: 'Tiếng Việt của bạn.',
    lead: 'Dù bạn chọn Fcitx5 hay IBus, cách gõ vẫn quen thuộc. Funput đưa Telex và VNI vào môi trường Linux bạn yêu thích.',
    os: 'Linux x86-64 · Fcitx5 hoặc IBus',
    requirements:
      'Debian/Ubuntu (.deb), Fedora/openSUSE (.rpm) và Arch (pacman). Chọn framework phù hợp với phiên desktop của bạn.',
    features: [
      [
        'Fcitx5 hoặc IBus',
        'Fcitx5 là lựa chọn mặc định của trình cài. Bạn cũng có thể chọn IBus cho môi trường đã cấu hình sẵn.',
      ],
      [
        'Nhiều bản phân phối',
        'Có hướng dẫn và gói cài cho Ubuntu, Debian, Fedora, openSUSE và Arch trên x86-64.',
      ],
      [
        'Cùng một cách gõ',
        'Telex, Telex+ và VNI; hỗ trợ chuyển mã Unicode, TCVN3 và VNI-Windows trong giao diện cài đặt.',
      ],
    ],
    steps: [
      [
        'Chọn cách cài',
        'Mở tài liệu Linux để chọn gói theo bản phân phối và framework Fcitx5 hoặc IBus.',
      ],
      [
        'Cấu hình phiên desktop',
        'Làm theo hướng dẫn cho desktop và Wayland hoặc X11 đang dùng. Với Fcitx5 ngoài KDE, cần cấu hình môi trường cho phiên đăng nhập.',
      ],
      [
        'Thêm Funput',
        'Thêm Funput trong Fcitx5 Configuration hoặc Input Sources của IBus. Đăng xuất rồi đăng nhập lại theo hướng dẫn và chọn kiểu gõ.',
      ],
    ],
    questions: [
      [
        'Funput dùng được trên Ubuntu và Fedora không?',
        'Có. Tài liệu hướng dẫn các gói Debian/Ubuntu (.deb), Fedora/openSUSE (.rpm) và Arch (pacman), với bản phát hành x86-64.',
      ],
      [
        'Nên chọn Fcitx5 hay IBus?',
        'Fcitx5 là lựa chọn được khuyến nghị trong tài liệu Funput. IBus phù hợp nếu bạn muốn giữ framework đã được cấu hình trong GNOME/Ubuntu. Xem hướng dẫn theo desktop trước khi cài.',
      ],
    ],
  },
} as const;
