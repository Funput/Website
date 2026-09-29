---
title: 'Cách cài Funput trên Windows 10 và 11'
seoTitle: 'Cách cài Funput trên Windows 10, Windows 11 và gõ tiếng Việt'
description: 'Cài Funput miễn phí từ Microsoft Store trên Windows 10 và 11, chọn Telex, VNI hoặc Telex+. Hướng dẫn cập nhật qua Store và dùng bản portable khi cần.'
pubDate: 2026-09-27T07:30:00Z
updatedDate: 2026-09-29
draft: false
tags:
  - huong-dan
  - windows
  - cai-dat
---

**Funput đã có trên [Microsoft Store](https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS).** Bạn có thể cài miễn phí trên Windows 10 và 11, mở từ menu Start và nhận bản cập nhật qua Store.

Bài này hướng dẫn từ lúc cài ứng dụng đến khi gõ được câu tiếng Việt đầu tiên, cùng những điều cần biết về khay hệ thống và cập nhật. Nếu cần dùng bản `.exe` portable, phần cuối bài có hướng dẫn riêng.

## Kiểm tra máy trước khi tải

Funput hỗ trợ **Windows 10 từ phiên bản 1809 (build 17763) trở lên** và **Windows 11**. Bản phát hành dành cho **x86-64**. Windows on ARM chạy qua mô phỏng; hiện chưa có bản ARM riêng.

Bạn có thể nhấn `Windows + R`, nhập `winver` rồi nhấn Enter để xem phiên bản Windows. Bản Funput này không yêu cầu cài thêm .NET hay WebView2.

Xem [trang Funput cho Windows](/windows/) để biết yêu cầu hệ thống và đường dẫn tải chính thức. Bạn cũng có thể đọc [tài liệu cài đặt Windows của Funput](https://docs.funput.app/docs/install/windows/) để xem chi tiết từng cách cài.

## Bước 1: Cài Funput từ Microsoft Store

Mở [trang Funput chính thức trên Microsoft Store](https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS). Chọn **Nhận / Get** hoặc **Cài đặt / Install** theo ngôn ngữ hiển thị. Nếu trình duyệt đề nghị mở ứng dụng Microsoft Store, tiếp tục trong Store để hoàn tất cài đặt.

Bạn không cần tải tệp `.exe`, tạo thư mục riêng hoặc tự thay tệp ứng dụng khi dùng bản Store.

## Bước 2: Mở Funput

Sau khi cài xong, chọn **Mở / Open** trong Store hoặc tìm **Funput** trong menu Start. Làm theo hướng dẫn thiết lập lần đầu để chọn kiểu gõ. Biểu tượng Funput xuất hiện ở **khay hệ thống**, gần đồng hồ trên thanh tác vụ.

Nếu đang dùng bản portable hoặc một bộ gõ tiếng Việt khác, hãy thoát bộ gõ đang chạy trước khi mở bản mới để tránh hai ứng dụng cùng xử lý phím.

## Bước 3: Chọn kiểu gõ và thử tiếng Việt

Nhấp trái biểu tượng Funput ở khay hệ thống để mở **Control Center**, bật chế độ tiếng Việt và chọn **Telex**, **Telex+** hoặc **VNI**. Bạn cũng có thể nhấp phải biểu tượng, chọn **Cài đặt…** rồi mở **Cách gõ**.

<figure>
  <img src="/brand/screenshots/windows.png" width="960" height="756" alt="Cửa sổ cài đặt Funput trên Windows với lựa chọn Telex, Telex+ và VNI" loading="lazy" />
  <figcaption>Giao diện Funput dành cho Windows. Chọn kiểu gõ phù hợp với thói quen của bạn.</figcaption>
</figure>

Mở Notepad hoặc ứng dụng ghi chú và thử:

| Kiểu gõ đang chọn | Chuỗi phím  | Kết quả  |
| ----------------- | ----------- | -------- |
| Telex             | `xin chaof` | xin chào |
| VNI               | `xin chao2` | xin chào |
| Telex+            | `tr][ngf`   | trường   |

**Telex+ là Telex nâng cao.** Ngoài các quy tắc Telex quen thuộc, chế độ này bổ sung phím tắt `[` → ơ, `]` → ư và cách dùng `w` theo ngữ cảnh. Xem [bảng phím Telex, VNI và Telex nâng cao](/blog/telex-vni-va-telex-nang-cao/) nếu bạn muốn tra thêm ví dụ.

Phím tắt chuyển tiếng Việt/tiếng Anh mặc định là **Ctrl + phím dấu huyền ngược (backtick, `` ` ``)**. Bạn có thể đổi trong **Cài đặt → Phím tắt**. Biểu tượng khay có màu biểu thị chế độ tiếng Việt; trạng thái trắng đen biểu thị chế độ tiếng Anh.

## Dùng khay hệ thống và khởi động cùng Windows

Bạn không cần giữ cửa sổ Cài đặt mở để gõ. Funput chạy nền ở khay hệ thống:

- **Nhấp trái:** mở hoặc đóng Control Center để đổi nhanh chế độ và kiểu gõ.
- **Nhấp phải:** mở menu Cài đặt, Chuyển mã hoặc Thoát. Bản portable có thêm mục Kiểm tra cập nhật; bản Store cập nhật qua Microsoft Store.
- **Không thấy biểu tượng:** mở vùng biểu tượng ẩn bằng mũi tên trên thanh tác vụ.

Nếu muốn Funput sẵn sàng mỗi lần bật máy, mở **Cài đặt → Tổng quan → Khởi động cùng Windows**. Với bản Store, nếu Windows đã tắt quyền khởi động, hãy kiểm tra **Settings → Apps → Startup**. Với bản portable, nếu chuyển `Funput.exe` sang thư mục khác, tắt rồi bật lại tùy chọn trong Funput để ghi nhận đường dẫn mới.

## Đã mở Funput nhưng chưa gõ được tiếng Việt?

### Gõ chữ hoặc số mà không ra dấu

Kiểm tra chế độ tiếng Việt đang bật và kiểu gõ khớp với chuỗi phím bạn dùng. `chaof` là Telex; `chao2` là VNI. Thử trong Notepad trước để phân biệt vấn đề thiết lập với vấn đề của một ứng dụng cụ thể.

Nếu đang mở một bộ gõ tiếng Việt khác, hãy tạm thoát bộ gõ đó rồi thử lại với Funput để tránh hai ứng dụng cùng xử lý phím.

### Không thấy cửa sổ hoặc biểu tượng Funput

Kiểm tra vùng biểu tượng ẩn gần đồng hồ. Có thể ứng dụng vẫn đang chạy nhưng Windows đã ẩn biểu tượng. Nếu mở Funput từ menu Start (hoặc `Funput.exe` của bản portable) lần nữa mà cửa sổ Cài đặt xuất hiện, đó cũng là dấu hiệu Funput đã chạy sẵn.

### Gõ được trong Notepad nhưng không được ở ứng dụng quản trị

Windows hạn chế ứng dụng quyền thường đưa phím vào cửa sổ đang chạy với quyền Administrator. Nếu ứng dụng đích không cần quyền quản trị, hãy mở nó ở quyền thường. Khi thực sự cần gõ trong cửa sổ quản trị, hãy xem [giới hạn quyền trên Windows](https://docs.funput.app/docs/install/windows/#known-limitations). Với bản portable, bạn có thể thoát rồi mở `Funput.exe` bằng **Run as administrator**. Không cần chạy với quyền cao cho công việc thông thường.

### Giao diện Windows 10 khác ảnh Windows 11

Cửa sổ Cài đặt trên Windows 10 dùng nền đục, còn hiệu ứng Mica dành cho Windows 11. Khác biệt này không có nghĩa ứng dụng cài sai hoặc thiếu thành phần.

## Cập nhật và giữ lại cấu hình

**Bản Microsoft Store:** mở Microsoft Store và kiểm tra bản cập nhật Funput trong phần quản lý ứng dụng / Thư viện. Bản này do Store quản lý cập nhật; bạn không cần tải hay thay `.exe` thủ công. Trong **Cài đặt → Giới thiệu**, Funput hiển thị “Cập nhật qua Microsoft Store”.

**Bản portable:** chọn **Kiểm tra cập nhật…** từ menu khay hệ thống hoặc **Cài đặt → Giới thiệu**. Bản portable không tự kiểm tra cập nhật nền. Nếu cập nhật thủ công, tải `.exe` mới từ GitHub Releases, thoát Funput rồi đặt tệp mới cùng thư mục với `Funput.exe` và chạy tệp mới.

Trước khi chuyển từ bản portable sang bản Store, chuyển máy hoặc gỡ ứng dụng, dùng **Cài đặt → Dữ liệu → Xuất cấu hình** nếu muốn giữ các thiết lập. Sau khi mở bản mới, nhập lại cấu hình từ mục Dữ liệu.

## Tùy chọn: dùng bản portable

Nếu cần một tệp chạy để mang theo hoặc không dùng Microsoft Store, bản portable vẫn có trên GitHub Releases. Các bước về thư mục, đổi tên tệp và SmartScreen dưới đây **chỉ dành cho bản portable**.

### Tải bản portable từ GitHub

Mở [GitHub Releases chính thức của Funput](https://github.com/Funput/Funput/releases). Trong phần tệp đính kèm của bản phát hành, chọn **`Funput-<version>.exe`**, trong đó `<version>` là số phiên bản.

Tệp `.exe.sha256` đi kèm dùng để kiểm tra tính toàn vẹn, không phải ứng dụng. Các tệp “Source code” là mã nguồn, không phải bản chạy dành cho người dùng Windows.

Nếu muốn kiểm tra tệp vừa tải, mở PowerShell tại thư mục chứa tệp và chạy:

```powershell
Get-FileHash .\Funput-*.exe -Algorithm SHA256
```

So sánh giá trị `Hash` với nội dung tệp `.sha256` của đúng bản phát hành. Nếu không khớp, tải lại trước khi chạy. Checksum giúp phát hiện tệp sai hoặc hỏng; bạn vẫn cần lấy cả ứng dụng và checksum từ nguồn chính thức.

### Đặt ứng dụng vào thư mục cố định

Bạn có thể tạo thư mục **`%LOCALAPPDATA%\Programs\Funput\`** rồi chuyển tệp vừa tải vào đó. Để mở vị trí này, nhập `%LOCALAPPDATA%\Programs` vào thanh địa chỉ File Explorer; tạo thư mục `Programs` hoặc `Funput` nếu chưa có.

Một thư mục ổn định giúp bạn dễ tìm ứng dụng và tránh xóa nhầm khi dọn Downloads. Funput thường lưu `settings.json` cạnh tệp chạy khi thư mục đó cho phép ghi, nên hãy giữ cả thư mục thay vì chỉ giữ riêng tệp `.exe`.

Nếu thư mục chứa ứng dụng chỉ đọc, cấu hình có thể được lưu dự phòng trong **`%APPDATA%\Funput\settings.json`**. Với nhu cầu thông thường, vị trí trong `%LOCALAPPDATA%` giúp ứng dụng lưu thiết lập bằng quyền tài khoản hiện tại.

### Mở bản portable lần đầu

Nhấp đúp tệp `.exe`. Lần đầu chạy, Funput hiển thị hướng dẫn thiết lập để bạn chọn kiểu gõ. Biểu tượng Funput xuất hiện ở **khay hệ thống**, khu vực gần đồng hồ trên thanh tác vụ.

Có một chi tiết dễ khiến bạn bối rối: tệp **`Funput-<version>.exe` sẽ được thay bằng `Funput.exe` trong cùng thư mục** ở lần chạy đầu. Ứng dụng khởi động lại từ tên cố định này và dọn tệp có số phiên bản. Đây là hành vi phục vụ khởi động cùng Windows và cập nhật. Từ lần sau, mở `Funput.exe`.

### Nếu bản portable hiện SmartScreen

Bản portable tải từ GitHub có thể gặp cảnh báo SmartScreen. Hãy kiểm tra nguồn tải và checksum trước khi quyết định chạy. Nếu đó là tệp bạn chủ động tải từ GitHub Releases chính thức và đã kiểm tra, hộp thoại có thể có lựa chọn **More info → Run anyway**.

Không cần tắt SmartScreen hoặc phần mềm bảo vệ toàn hệ thống để dùng Funput. Nếu máy do công ty quản lý và chính sách không cho phép chạy, hãy liên hệ quản trị viên thay vì tìm cách vượt chính sách.

Bạn đã hoàn tất khi mở được Funput, chọn đúng kiểu gõ và nhập được câu tiếng Việt trong ứng dụng thường dùng. Nếu cần trợ giúp, gửi phiên bản Windows, phiên bản Funput và các bước tái hiện bằng nội dung mẫu qua [GitHub Issues](https://github.com/Funput/Funput/issues).

**[Tải Funput trên Microsoft Store](https://apps.microsoft.com/store/detail/9NR3WL5PD4ZS)** · [Funput cho Windows](/windows/) · [Tìm hiểu Funput](/blog/funput-la-gi/) · [Cài bàn phím Funput trên iPhone và iPad](/blog/cach-bat-ban-phim-funput-iphone-ipad/)
