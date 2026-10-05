---
title: 'Không gõ được tiếng Việt? Kiểm tra từ đâu'
seoTitle: 'Không gõ được tiếng Việt: cách kiểm tra và sửa lỗi với Funput'
description: 'Cách kiểm tra khi Funput không gõ được tiếng Việt, sai dấu hoặc mất chữ trên Windows, macOS, Linux, iPhone và Android. Có ví dụ Telex, VNI để thử ngay.'
pubDate: 2026-09-28T00:00:00Z
draft: false
tags:
  - huong-dan
  - go-tieng-viet
  - xu-ly-loi
---

Bạn gõ `chaof` nhưng màn hình vẫn hiện nguyên chữ, hoặc vừa đặt dấu thì từ bị đổi? Trước khi cài lại bộ gõ, hãy kiểm tra **bàn phím đang dùng, chế độ tiếng Việt và kiểu gõ**. Ba lựa chọn này khác nhau: đã mở Funput chưa chắc ô nhập hiện tại đang dùng Funput, và chọn VNI thì chuỗi phím Telex sẽ không cho kết quả như mong muốn.

Bài viết này giúp bạn khoanh vùng vấn đề khi dùng Funput trên máy tính hoặc điện thoại. Hãy thử từng bước với một câu mẫu, rồi quay lại ứng dụng bạn đang cần dùng.

## Thử nhanh bằng một câu ngắn

Mở một ô văn bản thông thường, chẳng hạn Notepad trên Windows hoặc Ghi chú trên iPhone. Chọn Funput, bật tiếng Việt nếu có công tắc chuyển chế độ, rồi chọn **một** kiểu gõ để thử:

| Kiểu gõ | Nhập lần lượt | Kết quả mong đợi |
| ------- | ------------- | ---------------- |
| Telex   | `xin chaof`   | xin chào         |
| VNI     | `xin chao2`   | xin chào         |

Gõ thêm dấu cách để kết thúc từ. Với Telex nâng cao, bạn cũng có thể dùng ví dụ Telex ở trên để kiểm tra cơ bản trước khi thử phím tắt.

Nếu câu mẫu đúng trong ứng dụng ghi chú nhưng sai ở nơi khác, hãy chuyển đến mục **Chỉ lỗi trong một ứng dụng** bên dưới. Nếu vẫn chưa có dấu ở cả hai nơi, tiếp tục kiểm tra bàn phím và kiểu gõ.

## Nhận diện dấu hiệu trước khi sửa

| Bạn đang gặp gì?                          | Nên kiểm tra trước                                                          |
| ----------------------------------------- | --------------------------------------------------------------------------- |
| `chaof` hoặc `chao2` vẫn giữ nguyên       | Funput đã được chọn chưa, tiếng Việt đã bật chưa, kiểu gõ có khớp không     |
| Gõ dấu bị lặp, mất hoặc đổi chữ           | Có hai bộ gõ cùng xử lý phím không; lỗi có xảy ra trong ứng dụng khác không |
| Tải Funput rồi nhưng vẫn thấy bàn phím cũ | Bước bật và chọn bàn phím trên điện thoại, hoặc chọn nguồn nhập trên Mac    |
| Chỉ một ứng dụng không nhận tiếng Việt    | Quyền chạy ứng dụng trên Windows hoặc cách ứng dụng tích hợp bộ gõ          |
| `hòa` thành `hoà`, `khỏe` thành `khoẻ`    | Tùy chọn kiểu đặt dấu, nếu phiên bản bạn dùng có mục này                    |

Đây là các điểm bắt đầu kiểm tra, không phải kết luận chắc chắn về nguyên nhân. Mỗi lần chỉ đổi một thiết lập để biết thay đổi nào có tác dụng.

## Kiểm tra đúng kiểu gõ Telex hoặc VNI

**Telex dùng chữ cái để đặt dấu; VNI dùng chữ số.** Nếu quen gõ `chaof`, hãy chọn Telex. Nếu quen gõ `chao2`, hãy chọn VNI. Đổi kiểu gõ trong Funput rồi thử lại bằng một từ mới, thay vì tiếp tục sửa từ đang gõ dở.

Một số cặp phím cơ bản:

- Dấu sắc: Telex dùng `s`, VNI dùng `1`.
- Dấu huyền: Telex dùng `f`, VNI dùng `2`.
- Chữ đ: Telex dùng `dd`, VNI dùng `d9`.

Telex nâng cao bổ sung các phím tắt và quy tắc theo ngữ cảnh. Nếu kết quả khác thói quen của bạn, thử chọn Telex thường để so sánh. Xem [bảng phím Telex, VNI và Telex nâng cao](/blog/telex-vni-va-telex-nang-cao/) để đối chiếu chuỗi phím cụ thể.

## Đã cài nhưng chưa chọn Funput

### Trên Windows

Kiểm tra biểu tượng Funput trong khay hệ thống gần đồng hồ, kể cả vùng biểu tượng ẩn. Mở Control Center từ biểu tượng đó để kiểm tra chế độ tiếng Việt và kiểu gõ.

Nếu một bộ gõ tiếng Việt khác đang chạy, tạm thoát bộ gõ đó rồi thử lại. Hai bộ gõ cùng can thiệp vào một chuỗi phím có thể khiến kết quả khó đoán. Bạn không cần gỡ ứng dụng để thực hiện phép thử này.

Nếu chưa thấy Funput chạy, làm theo [hướng dẫn cài Funput trên Windows 10 và 11](/blog/cai-funput-windows-10-11/).

### Trên macOS

Funput cần được thêm vào **Nguồn nhập / Input Sources**, sau đó được chọn làm nguồn nhập đang dùng. Chỉ mở cửa sổ Cài đặt của Funput chưa đủ để chuyển nguồn nhập.

Trong **Cài đặt Hệ thống → Bàn phím**, tìm phần nguồn nhập, thêm **Vietnamese → Funput** nếu chưa có, rồi chọn Funput từ menu nguồn nhập. Kiểm tra tiếp chế độ tiếng Việt trong Funput. Tên và vị trí các mục có thể khác giữa các phiên bản macOS.

Xem yêu cầu hệ thống tại [Funput cho macOS](/macos/) và hướng dẫn từng bước trong [bài cài bộ gõ tiếng Việt cho Mac](/blog/bo-go-tieng-viet-cho-mac/) hoặc [tài liệu cài đặt macOS](https://docs.funput.app/docs/install/macos/).

### Trên iPhone và iPad

Kiểm tra Funput đã có trong **Cài đặt → Cài đặt chung → Bàn phím → Các bàn phím**. Sau đó mở Ghi chú, chạm giữ biểu tượng quả địa cầu và chọn **Funput**.

Nếu thay đổi kiểu gõ trong ứng dụng nhưng bàn phím chưa nhận, kiểm tra bước **Cho phép truy cập đầy đủ** theo [hướng dẫn bật Funput trên iPhone và iPad](/blog/cach-bat-ban-phim-funput-iphone-ipad/). Bài đó giải thích phạm vi quyền trước khi bạn quyết định cấp, cùng ảnh từng bước.

### Trên Android

Mở Funput và làm theo thẻ **Thiết lập Funput** để bật bàn phím. Khi ô nhập xuất hiện, dùng trình chuyển bàn phím của hệ thống để chọn **Funput**. Vị trí nút chuyển có thể khác tùy hãng máy và phiên bản Android.

Hai bước **bật bàn phím** và **chọn bàn phím để dùng** đều cần hoàn tất. Xem [Funput cho Android](/android/) hoặc [hướng dẫn cài đặt Android](https://docs.funput.app/docs/install/android/) nếu Funput chưa có trong danh sách.

### Trên Linux

Trước hết xác định bạn đang dùng **Fcitx5 hay IBus**. Theo tài liệu Funput, gói `funput` dành cho Fcitx5, còn `funput-ibus` dành cho IBus. Trong một phiên làm việc, chỉ nên bật một framework bộ gõ.

Với Fcitx5, lệnh sau giúp kiểm tra addon và cấu hình phiên:

```bash
fcitx5-diagnose
```

Nếu Funput đã có trong danh sách nhưng ứng dụng không nhận chữ, đối chiếu cấu hình cho đúng môi trường X11 hoặc Wayland. Trên KDE Plasma/Wayland, khi Fcitx5 được khởi động qua Virtual keyboard, tài liệu khuyên đăng xuất rồi đăng nhập lại thay vì khởi động lại tiến trình Fcitx5. Hãy lưu công việc trước khi đăng xuất.

Xem [Funput cho Linux](/linux/) và [tài liệu xử lý sự cố Linux](https://docs.funput.app/docs/install/linux/troubleshooting/) để làm theo đúng trường hợp của máy.

## Chỉ lỗi trong một ứng dụng

Nếu cùng chuỗi phím cho kết quả đúng trong ứng dụng ghi chú nhưng sai trong ứng dụng khác, hãy ghi lại tên ứng dụng, phiên bản và loại ô nhập gặp lỗi. Thử thêm một ô văn bản thông thường trong chính ứng dụng đó, nếu có.

**Trên Windows**, ứng dụng đích chạy với quyền Administrator có thể không nhận phím do bộ gõ quyền thường gửi vào. Nếu ứng dụng đích không cần quyền quản trị, mở lại ở quyền thường rồi thử. Trường hợp thực sự cần quyền cao được mô tả trong [hướng dẫn Windows](/blog/cai-funput-windows-10-11/).

**Trên iOS**, ô mật khẩu bảo mật dùng bàn phím hệ thống, và ứng dụng có thể không cho phép bàn phím bên thứ ba. Đây là giới hạn được [Apple mô tả trong tài liệu bàn phím tùy chỉnh](https://developer.apple.com/library/archive/documentation/General/Conceptual/ExtensibilityPG/CustomKeyboard.html). Việc Funput không xuất hiện trong ô này chưa đủ để kết luận bộ gõ bị lỗi; hãy thử lại trong Ghi chú.

**Trên Linux**, một số ứng dụng Qt hoặc XWayland cần cấu hình tích hợp riêng. Dùng [hướng dẫn cấu hình phiên](https://docs.funput.app/docs/install/linux/session-setup/) để đối chiếu, thay vì áp cùng một nhóm biến môi trường cho mọi desktop.

## Có dấu rồi nhưng vị trí dấu khác mong muốn

Các cặp như **hòa / hoà** hoặc **khỏe / khoẻ** có thể liên quan đến lựa chọn kiểu đặt dấu truyền thống và hiện đại. Nếu phiên bản Funput bạn dùng có tùy chọn này, kiểm tra trước khi coi đó là lỗi.

Trường hợp chữ bị lặp hoặc biến mất là vấn đề khác. Hãy thử lại với một bộ gõ duy nhất, ghi rõ chuỗi phím và kiểm tra ở hai ứng dụng. Nếu hiện tượng vẫn lặp lại, những thông tin đó sẽ hữu ích hơn việc chỉ mô tả “gõ bị sai”.

## Vẫn chưa được? Gửi một ví dụ có thể thử lại

Bạn có thể [báo lỗi trên GitHub](https://github.com/Funput/Funput/issues) hoặc gửi email đến [hello@funput.app](mailto:hello@funput.app). Một báo cáo ngắn nên có:

- Hệ điều hành và phiên bản Funput.
- Tên, phiên bản ứng dụng gặp lỗi.
- Kiểu gõ đang chọn: Telex, VNI hay Telex nâng cao.
- Chuỗi phím đã nhập, kết quả mong muốn và kết quả thực tế.
- Lỗi có xuất hiện trong ứng dụng ghi chú hay không.

Ví dụ: “Tôi chọn Telex, gõ `xin chaof` trong ứng dụng A nhưng nhận `xin chaof`; cùng thao tác trong Notepad ra `xin chào`.” Dùng câu mẫu thay cho nội dung riêng tư. Nếu gửi kết quả chẩn đoán Linux, đọc lại và ẩn thông tin cá nhân trước khi đăng công khai.

Bạn đã kiểm tra xong khi gõ được câu mẫu và lặp lại thành công trong ứng dụng thường dùng. Nếu mới bắt đầu, [bài giới thiệu Funput](/blog/funput-la-gi/) giúp bạn chọn đúng bản tải và hướng dẫn cho thiết bị của mình.
