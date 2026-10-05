---
title: 'Bộ gõ tiếng Việt cho Mac: cài Funput trên macOS từng bước'
seoTitle: 'Bộ gõ tiếng Việt cho Mac, MacBook: cài và bật Funput trên macOS'
description: 'Cài Funput, bộ gõ tiếng Việt miễn phí cho Mac và MacBook: chọn .pkg hay .app.zip, thêm vào Nguồn nhập, gõ Telex/VNI và xử lý lỗi trong Chrome, VS Code.'
pubDate: 2026-10-06T00:00:00Z
draft: false
tags:
  - macos
  - huong-dan
  - bo-go-tieng-viet
---

Bạn vừa cài một bộ gõ tiếng Việt cho Mac, mở TextEdit gõ `chaof` nhưng màn hình vẫn hiện nguyên chữ? Đó thường không phải lỗi cài đặt. **Trên macOS, cài bộ gõ và chọn bộ gõ là hai bước riêng**: sau khi đặt Funput vào máy, bạn còn cần thêm nó vào **Nguồn nhập** của hệ thống rồi chuyển sang dùng.

Bài này hướng dẫn gõ tiếng Việt trên MacBook, iMac hoặc Mac mini với Funput, từ lúc chọn tệp cài đến khi gõ được câu đầu tiên. Phần sau bài có các tùy chọn đáng dùng, lỗi thường gặp trong Chrome, VS Code và cách gỡ cài đặt gọn gàng.

## Kiểm tra máy trước khi tải

Funput cho macOS yêu cầu **macOS 26 (Tahoe) trở lên**. Bản phát hành là universal binary, chạy được trên cả **Apple Silicon (chip M) và Mac Intel**. Ứng dụng được ký Developer ID và notarized, nên Gatekeeper nhận diện được nguồn phát hành.

Để xem phiên bản macOS, mở menu Apple ở góc trái thanh menu rồi chọn **Giới thiệu về máy Mac này / About This Mac**.

> Trên macOS 15 (Sequoia) trở xuống, hệ thống sẽ không nạp Funput. Đây là giới hạn ghi trong ứng dụng vì giao diện dùng các API mới của macOS 26, không phải khuyến nghị có thể bỏ qua.

Xem yêu cầu đầy đủ và đường dẫn tải tại [trang Funput cho macOS](/macos/).

## Chọn bản cài: .pkg hay .app.zip?

Mỗi bản phát hành trên [GitHub Releases của Funput](https://github.com/Funput/Funput/releases) có hai tệp cho Mac. Cả hai đều là cùng một bộ gõ; khác nhau ở cách cài và quyền cần có.

| Tệp                | Cần quyền admin? | Funput được đặt tại                    | Phù hợp khi                                     |
| ------------------ | ---------------- | -------------------------------------- | ----------------------------------------------- |
| `Funput-*.pkg`     | Có               | `/Library/Input Methods/` (toàn máy)   | Máy cá nhân, muốn cài nhanh một bước            |
| `Funput-*.app.zip` | Không            | `~/Library/Input Methods/` (tài khoản) | Máy công ty, tài khoản Standard, không có admin |

Nếu muốn kiểm tra tệp vừa tải, mở Terminal tại thư mục chứa tệp và chạy:

```bash
shasum -a 256 Funput-*.pkg
```

So kết quả với nội dung tệp `.sha256` của đúng bản phát hành. Với bản zip, thay tên tệp trong lệnh cho phù hợp. Nếu hai giá trị không khớp, hãy tải lại trước khi cài.

Lưu ý: **Funput không có trên Mac App Store**. Bộ gõ trên macOS không chạy được trong sandbox của App Store, nên bản chính thức chỉ được phát hành qua GitHub Releases và liên kết từ website.

## Bước 1: Cài Funput vào máy Mac

### Cài bằng .pkg

1. Nhấp đúp tệp `Funput-*.pkg`. macOS mở trình **Cài đặt / Installer**.
2. Làm theo hướng dẫn trên màn hình và nhập mật khẩu tài khoản admin khi được hỏi.
3. Funput được cài vào `/Library/Input Methods/Funput.app`, dùng chung cho mọi tài khoản trên máy.

### Cài bằng .app.zip

1. Nhấp đúp tệp `Funput-*.app.zip` để giải nén, bạn sẽ có `Funput.app`.
2. Mở **Finder**, nhấn `Cmd + Shift + G`, nhập `~/Library/Input Methods` rồi nhấn Enter. Nếu thư mục chưa có, tạo thư mục mới tên `Input Methods` trong `~/Library`.
3. Kéo `Funput.app` vào thư mục `Input Methods`.

Đừng để Funput nằm lâu dài trong Downloads hoặc Desktop. macOS chỉ nhận diện ứng dụng như một bộ gõ khi nó nằm trong thư mục **Input Methods**.

## Bước 2: Thêm Funput vào Nguồn nhập

Đây là bước hay bị bỏ qua nhất. Cài xong, macOS vẫn chưa dùng Funput cho đến khi bạn thêm nó vào danh sách nguồn nhập:

**Cài đặt Hệ thống → Bàn phím → Nhập văn bản → Nguồn nhập → Sửa… → + → Tiếng Việt → Funput → Thêm**

Nếu máy dùng tiếng Anh, đường dẫn tương ứng là:

**System Settings → Keyboard → Text Input → Input Sources → Edit… → + → Vietnamese → Funput → Add**

Tên và vị trí nút có thể khác đôi chút giữa các phiên bản macOS. Sau khi thêm, biểu tượng Funput xuất hiện trên thanh menu. Nếu chưa thấy Funput trong danh sách, xem mục **Xử lý sự cố nhanh** bên dưới.

## Bước 3: Chọn kiểu gõ và gõ thử tiếng Việt

Chọn Funput làm nguồn nhập đang dùng bằng menu nguồn nhập trên thanh menu, hoặc phím tắt chuyển nguồn nhập của macOS (thường là `Control + Space` hoặc phím **Globe / quả địa cầu** trên bàn phím Mac).

Sau đó mở cửa sổ Cài đặt của Funput, vào **Cách gõ** và chọn **Telex**, **Telex nâng cao** hoặc **VNI**.

<figure>
  <img
    src="/brand/screenshots/macos.png"
    width="960"
    height="756"
    alt="Cửa sổ cài đặt Funput trên macOS với lựa chọn kiểu gõ Telex, Telex nâng cao, VNI và tùy chọn khởi động"
    loading="lazy"
  />
  <figcaption>
    Cửa sổ cài đặt Funput trên macOS. Chọn kiểu gõ bạn đã quen tay.
  </figcaption>
</figure>

Mở TextEdit hoặc Ghi chú và thử theo kiểu gõ đã chọn:

| Kiểu gõ        | Nhập lần lượt    | Kết quả    |
| -------------- | ---------------- | ---------- |
| Telex          | `tieesng vieejt` | tiếng việt |
| VNI            | `xin chao2`      | xin chào   |
| Telex nâng cao | `tr][ngf`        | trường     |

**Phím tắt bật/tắt tiếng Việt mặc định là `Control + \`** (Control và dấu gạch chéo ngược). Bạn có thể đổi trong **Cài đặt → Phím tắt**. Phím tự đặt phải kèm `Control`, `Option` hoặc `Command`, vì một phím trần sẽ dễ bị kích hoạt nhầm giữa lúc gõ.

Chưa biết chọn Telex hay VNI? Xem [bảng phím Telex, VNI và Telex nâng cao](/blog/telex-vni-va-telex-nang-cao/) với ví dụ cho từng dấu.

## Tìm Funput ở đâu sau khi cài?

Bộ gõ nằm trong thư mục `Library/Input Methods`, nơi **Spotlight không đánh chỉ mục**. Vì vậy, Funput tự đặt thêm một ứng dụng nhỏ làm lối vào cửa sổ Cài đặt:

| Cách cài   | Ứng dụng lối vào nằm ở                                    |
| ---------- | --------------------------------------------------------- |
| `.pkg`     | `/Applications/Funput.app`                                |
| `.app.zip` | `~/Applications/Funput.app`, được tạo ở lần chạy đầu tiên |

Nhờ ứng dụng này, bạn gõ “Funput” trong Spotlight là mở được Cài đặt. Ngoài ra, biểu tượng **VI** trên thanh menu cho phép bật/tắt tiếng Việt, đổi kiểu gõ và mở Cài đặt nhanh. Nếu muốn thanh menu gọn hơn, tắt biểu tượng trong **Cài đặt → Tổng quan → Hiện biểu tượng thanh menu**.

## Những tính năng nên biết trên Funput macOS

Sau khi gõ được, dành vài phút xem các tính năng sau. Chúng giúp việc gõ tiếng Việt trên Mac thuận tay hơn, nhất là khi bạn viết xen tiếng Anh hoặc làm việc với nhiều ứng dụng.

- **Kiểu đặt dấu:** chọn truyền thống (`hòa`, `khỏe`) hoặc hiện đại (`hoà`, `khoẻ`) trong **Cách gõ**.
- **Tự khôi phục từ tiếng Anh:** giúp các từ tiếng Anh không bị biến thành chữ có dấu ngoài ý muốn.
- **Bỏ dấu sau Backspace:** xóa lùi rồi gõ dấu khác, Funput đặt lại dấu cho đúng từ.
- **Nhớ theo ứng dụng:** Funput nhớ lựa chọn Việt/Anh gần nhất của từng ứng dụng. Tắt tiếng Việt trong Terminal một lần, lần sau quay lại Terminal sẽ tự ở chế độ tiếng Anh, còn Pages vẫn giữ tiếng Việt. Bạn không cần cấu hình danh sách nào.
- **Gõ tắt:** tạo bảng viết tắt trong mục **Gõ tắt**, gõ chuỗi tắt rồi dấu cách để bung, ví dụ `vn` thành “Việt Nam”. Khi bật tự nhận diện hoa/thường, `Vn` hay `VN` cũng bung đúng.
- **Chuyển mã:** đổi văn bản giữa Unicode dựng sẵn, Unicode tổ hợp, TCVN3 (ABC) và VNI-Windows. Bài [Unicode, TCVN3 và VNI-Windows](/blog/unicode-tcvn3-vni-windows/) giải thích khi nào cần dùng.
- **Xuất / nhập cấu hình:** mang toàn bộ tùy chọn và bảng gõ tắt sang máy Mac khác bằng một tệp.

## Gõ trong Chrome, VS Code, Slack bị đứng?

Trên macOS 26/27 beta, có một giới hạn đã biết với các ứng dụng Chromium và Electron như Chrome, VS Code, Cursor, Slack, Discord hay Notion. **Dấu hiệu:** sau khi đổi nguồn nhập trong lúc con trỏ đang ở ô nhập, phím chữ ngừng ra chữ, trong khi `Cmd + C`, Delete hay phím mũi tên vẫn hoạt động.

Nguyên nhân nằm ở thay đổi nội bộ của macOS mà cầu nối nhập liệu của Chromium chưa theo kịp. Theo [tài liệu Funput](https://docs.funput.app/docs/install/macos/#known-limitations), hiện tượng này ảnh hưởng đến mọi bộ gõ bên thứ ba trên macOS, không riêng Funput.

**Cách né:**

1. Chọn Funput làm nguồn nhập **trước** khi bấm vào ô nhập.
2. Nếu đã đổi nguồn nhập khi đang gõ, bấm ra ngoài ô nhập rồi bấm lại.

Các ứng dụng AppKit thuần như TextEdit, Ghi chú, Mail, Safari và Pages không gặp vấn đề này. Riêng tính năng bỏ dấu sau Backspace hiện không hoạt động trong Cursor, vì Cursor báo vị trí con trỏ không nhất quán và Funput chọn không đoán để tránh làm hỏng văn bản. VS Code vẫn dùng bình thường.

## Xử lý sự cố nhanh

### Không thấy Funput trong Nguồn nhập

macOS chỉ quét lại danh sách bộ gõ khi bắt đầu phiên đăng nhập. Hãy **đăng xuất rồi đăng nhập lại** một lần. Sau đó kiểm tra `Funput.app` đã nằm đúng trong `/Library/Input Methods` hoặc `~/Library/Input Methods`, và máy đang chạy macOS 26 trở lên.

### Đã chọn Funput nhưng vẫn ra chữ tiếng Anh

Funput có thể đang ở chế độ tiếng Anh. Nhấn `Control + \` để bật tiếng Việt, hoặc bấm biểu tượng **VI** trên thanh menu để xem trạng thái hiện tại.

### Gõ VNI mà không ra dấu

VNI đặt dấu bằng **chữ số**: `chao2` mới thành “chào”. Nếu bạn quen gõ `chaof`, bạn đang dùng Telex; hãy đổi kiểu gõ trên thanh menu hoặc trong **Cài đặt → Cách gõ**.

### macOS cảnh báo khi mở tệp cài

Bản chính thức đã được ký và notarized. Nếu vẫn thấy cảnh báo, kiểm tra lại nguồn tải có phải GitHub Releases của Funput không, và so checksum SHA-256 như ở phần trên. Không cần tắt Gatekeeper để dùng Funput.

Với các lỗi chung cho mọi nền tảng, như hai bộ gõ cùng xử lý phím hoặc chỉ lỗi trong một ứng dụng, xem bài [không gõ được tiếng Việt? Kiểm tra từ đâu](/blog/khong-go-duoc-tieng-viet/).

## Cập nhật và gỡ cài đặt Funput

**Cập nhật:** Funput trên Mac không tự kiểm tra cập nhật nền và không hiện thông báo khi có bản mới. Thỉnh thoảng hãy bấm **Kiểm tra cập nhật**, có trong nhóm **Công cụ** ở thanh bên cửa sổ Cài đặt hoặc trong bảng điều khiển mở từ biểu tượng VI. Funput đọc danh sách phát hành đã ký từ GitHub Releases, xác minh chữ ký rồi cài bản mới. Nếu muốn cập nhật thủ công, tải bản mới và cài đè theo đúng cách bạn đã dùng lần trước.

**Gỡ cài đặt:** macOS ghi nhớ nguồn nhập độc lập với tệp trên ổ đĩa, nên hãy làm theo đúng thứ tự:

1. Mở **Cài đặt Hệ thống → Bàn phím → Nguồn nhập**, chọn **Funput** rồi nhấn **−**.
2. Xóa `Funput.app` trong thư mục Input Methods và ứng dụng lối vào trong Applications, theo cách bạn đã cài.
3. **Đăng xuất rồi đăng nhập lại**, hoặc khởi động lại máy, để macOS quên hẳn nguồn nhập.

Trước khi gỡ hoặc chuyển sang máy mới, mở Cài đặt, tìm dòng **Dữ liệu** trong nhóm **Công cụ** và bấm nút **Xuất cấu hình** nếu muốn giữ các tùy chọn và bảng gõ tắt. Danh sách đầy đủ đường dẫn cần xóa có trong [tài liệu gỡ cài đặt macOS](https://docs.funput.app/docs/install/macos/#uninstall).

## Câu hỏi thường gặp

### Funput có miễn phí trên Mac không?

Có. Funput là bộ gõ tiếng Việt miễn phí, mã nguồn mở theo giấy phép MIT. Bạn có thể đọc [mã nguồn trên GitHub](https://github.com/Funput/Funput) và tải bản chính thức từ GitHub Releases.

### Funput có chạy trên MacBook Intel không?

Có, miễn là máy chạy macOS 26 (Tahoe) trở lên. Bản phát hành là universal binary cho cả Apple Silicon và Intel. Yêu cầu bắt buộc là phiên bản macOS, không phải loại chip.

### Có dùng Funput song song với bộ gõ tiếng Việt khác được không?

Bạn có thể giữ nhiều nguồn nhập trong danh sách, nhưng mỗi lúc chỉ nên để một bộ gõ tiếng Việt xử lý phím. Nếu đang chạy một ứng dụng gõ tiếng Việt khác ở nền, hãy tạm thoát ứng dụng đó khi thử Funput để kết quả không bị lặp dấu hoặc mất chữ.

### Funput có gửi nội dung tôi gõ lên máy chủ không?

Theo [chính sách quyền riêng tư](/privacy/), đường xử lý nhập liệu của Funput được thiết kế để không gửi nội dung bạn gõ lên máy chủ của Funput. Các tùy chọn cấu hình được lưu cục bộ trên máy Mac. Vì Funput là mã nguồn mở, bạn cũng có thể tự kiểm tra cách ứng dụng xử lý dữ liệu.

### Tôi dùng cả iPhone, Windows hoặc Linux thì sao?

Funput có trên năm nền tảng với cùng các kiểu gõ Telex và VNI. Xem [bài giới thiệu Funput](/blog/funput-la-gi/) để chọn đúng bản cho từng thiết bị, hoặc [cách bật bàn phím Funput trên iPhone và iPad](/blog/cach-bat-ban-phim-funput-iphone-ipad/) nếu bạn muốn gõ quen tay cả trên điện thoại.

Bạn đã hoàn tất khi chọn được Funput trong Nguồn nhập, bật tiếng Việt bằng `Control + \` và gõ đúng câu thử trong ứng dụng thường dùng. Nếu gặp lỗi, gửi phiên bản macOS, phiên bản Funput, tên ứng dụng và chuỗi phím mẫu qua [GitHub Issues](https://github.com/Funput/Funput/issues) hoặc [hello@funput.app](mailto:hello@funput.app).

**[Tải Funput cho macOS](/macos/)** · [Tìm hiểu Funput](/blog/funput-la-gi/) · [Tài liệu cài đặt macOS](https://docs.funput.app/docs/install/macos/)
