---
title: 'Từ Windows sang Linux, vẫn gõ tiếng Việt quen tay'
seoTitle: 'Chuyển Windows sang Linux: gõ tiếng Việt với Funput'
description: 'Chuyển từ Windows sang Linux vẫn gõ Telex, VNI quen tay với Funput. Tìm hiểu Fcitx5, IBus, cách thiết lập và kiểm tra tiếng Việt trước khi làm việc.'
pubDate: 2026-09-29T01:00:00Z
draft: false
tags:
  - linux
  - chuyen-doi-so
  - go-tieng-viet
---

Đổi hệ điều hành có thể bắt đầu bằng việc thử một desktop mới. Nhưng để dùng Linux mỗi ngày, bạn cần làm được những việc rất quen: trả lời email, viết tài liệu, tìm kiếm và nhắn tin bằng tiếng Việt. **Bộ gõ tiếng Việt nên có mặt ngay trong những bước đầu chuyển từ Windows sang Linux.**

Funput giúp bạn giữ kiểu gõ Telex hoặc VNI khi sang Linux, với bản dành cho Fcitx5 và IBus. Bạn học cách thiết lập nguồn nhập của hệ điều hành mới, còn cách đặt dấu vẫn có thể giữ như trước.

## Chuyển đổi số bắt đầu từ công việc hằng ngày

Với cá nhân hoặc một nhóm đang cân nhắc Linux, cài hệ điều hành chỉ là bước khởi đầu. Trải nghiệm thực tế nằm ở các công việc lặp lại: mở tài liệu, nhập tên khách hàng, sửa báo cáo và trao đổi với đồng nghiệp.

Một bộ gõ thuận tiện giúp giảm một phần trở ngại đó. Trước khi chuyển môi trường làm việc chính, hãy thử Linux bằng chính các ứng dụng và tài liệu bạn cần dùng. Nếu triển khai cho một nhóm, nên bắt đầu trên một số máy đại diện rồi ghi lại cấu hình đã kiểm tra.

| Việc thường làm trên Windows   | Điều cần thử trên Linux                                                  |
| ------------------------------ | ------------------------------------------------------------------------ |
| Viết email, dùng ứng dụng web  | Gõ dấu, sửa giữa câu và gửi thử nội dung mẫu                             |
| Soạn tài liệu văn phòng        | Font tiếng Việt, bảng biểu và định dạng khi mở lại tệp                   |
| Gõ xen tiếng Việt và tiếng Anh | Chuyển chế độ, nhập tên sản phẩm và đường dẫn                            |
| Dùng phím tắt quen thuộc       | Kiểm tra phím chuyển tiếng Việt có trùng với desktop hoặc ứng dụng không |
| Làm việc với tài liệu cũ       | Xác định bảng mã, thử chuyển sang Unicode trên bản sao                   |

Đây cũng là cách đánh giá việc chuyển đổi có phù hợp với bạn: dựa vào công việc hoàn thành được trên máy mới, thay vì chỉ nhìn giao diện desktop.

## Giữ Telex và VNI, làm quen với nguồn nhập mới

Trên Windows, Funput chạy như một ứng dụng ở khay hệ thống. Trên Linux, **Funput là bộ xử lý tiếng Việt hoạt động bên trong Fcitx5 hoặc IBus**. Hai framework này kết nối bộ gõ với môi trường desktop và ô nhập của ứng dụng.

Vì vậy, bạn không mang tệp `.exe` từ Windows sang chạy để cài bộ gõ Linux. Hãy dùng bản Linux và chọn framework phù hợp với phiên làm việc.

| Lựa chọn           | Khi nào nên cân nhắc?                                                                |
| ------------------ | ------------------------------------------------------------------------------------ |
| Funput trên Fcitx5 | Đường cài được tài liệu Funput khuyến nghị; cần cấu hình theo desktop và Wayland/X11 |
| Funput trên IBus   | Bạn muốn giữ môi trường GNOME/Ubuntu đã kết nối sẵn với IBus                         |

Chỉ nên bật một framework xử lý nhập liệu trong một phiên làm việc. Fcitx5 và IBus là nền tảng mà Funput tích hợp vào, không phải các bộ gõ tiếng Việt mà bạn cần loại bỏ để dùng Funput.

## Cài Funput trên Ubuntu, Fedora và các bản Linux được hỗ trợ

Các gói Linux được giới thiệu trên website dành cho **x86-64**, với hướng dẫn cho Ubuntu/Debian, Fedora/openSUSE và Arch. Kiểm tra [trang Funput cho Linux](/linux/) trước khi chọn gói.

### 1. Xác định desktop và loại phiên làm việc

Mở terminal và chạy hai lệnh chỉ đọc thông tin:

```bash
echo "$XDG_SESSION_TYPE"
echo "$XDG_CURRENT_DESKTOP"
```

Kết quả giúp bạn chọn hướng dẫn cho Wayland hoặc X11, GNOME hoặc KDE. Nếu giá trị trống, kiểm tra phần thông tin hệ thống hoặc màn hình đăng nhập; đừng tự đoán cấu hình cần dùng.

### 2. Cài đúng gói từ nguồn chính thức

Mở [hướng dẫn cài Funput trên Linux](https://docs.funput.app/docs/install/linux/) và chọn bản phân phối đang dùng. Đường cài khuyến nghị sử dụng kho phần mềm có ký GPG; sau khi thêm kho, bạn có thể nhận bản cập nhật qua trình quản lý gói của hệ thống.

Gói **`funput`** dành cho Fcitx5. Nếu chọn IBus, làm theo [hướng dẫn Funput trên IBus](https://docs.funput.app/docs/install/linux/ibus/) với gói **`funput-ibus`**.

### 3. Kết nối framework với desktop

Đây là bước dễ bỏ qua nhất: cài gói thành công chưa đồng nghĩa với việc ứng dụng đã nhận phím qua đúng framework. Làm theo hướng dẫn của Funput cho phiên desktop của bạn, rồi đăng xuất và đăng nhập lại khi được yêu cầu.

Với KDE Plasma/Wayland, chú ý bước chọn Fcitx 5 trong **Virtual Keyboard**. Không áp một nhóm biến môi trường chung cho mọi desktop: cách kết nối ứng dụng Wayland và X11 có khác biệt. [Tài liệu Fcitx5 về Wayland](https://fcitx-im.org/wiki/Using_Fcitx_5_on_Wayland) giải thích chi tiết theo từng môi trường.

### 4. Thêm Funput và chọn kiểu gõ

Với Fcitx5, mở **Fcitx5 Configuration**, bấm thêm bộ gõ, bỏ chọn **Only Show Current Language** nếu cần rồi tìm Funput. Với IBus trên GNOME, tìm Funput trong **Settings → Keyboard → Input Sources → Vietnamese**; tên mục có thể khác theo phiên bản desktop.

Mở ứng dụng cài đặt Funput để chọn Telex hoặc VNI, rồi thử trong một ô văn bản thông thường:

| Kiểu gõ | Nhập        | Kết quả  |
| ------- | ----------- | -------- |
| Telex   | `xin chaof` | xin chào |
| VNI     | `xin chao2` | xin chào |

Bạn cũng có thể chọn Telex nâng cao. Xem [bảng phím và ví dụ thực hành](/blog/telex-vni-va-telex-nang-cao/) nếu cần ôn lại quy tắc.

<figure>
  <img
    src="/brand/screenshots/linux.png"
    width="960"
    height="878"
    alt="Giao diện cài đặt Funput trên Linux để thiết lập bộ gõ tiếng Việt"
    loading="lazy"
  />
  <figcaption>Funput có giao diện cài đặt riêng trên Linux, dùng chung cho bản Fcitx5 và IBus.</figcaption>
</figure>

## Mang tài liệu và thói quen làm việc sang Linux

Với văn bản Unicode, hãy kiểm tra font hỗ trợ tiếng Việt và khả năng hiển thị trong ứng dụng bạn chọn. Nếu tài liệu cũ dùng TCVN3 hoặc VNI-Windows, Funput Linux có công cụ Chuyển mã. Thử trên một đoạn ngắn và giữ bản gốc để đối chiếu; xem [hướng dẫn về bảng mã tiếng Việt](/blog/unicode-tcvn3-vni-windows/).

Nếu thường dùng gõ tắt, hãy thiết lập các cụm từ cần dùng trong Funput rồi thử cả chữ hoa, chữ thường. Kiểm tra lại phím chuyển Việt–Anh để tránh trùng với phím tắt của desktop mới.

**Bản Linux hiện chưa có tính năng nhớ chế độ Việt–Anh theo từng ứng dụng như bản Windows.** Hãy tính đến khác biệt này nếu thường xuyên chuyển giữa ứng dụng viết tiếng Việt và môi trường lập trình.

## Kiểm tra trước ngày làm việc đầu tiên

Thử nhập một đoạn có dấu trong trình duyệt, ứng dụng văn phòng và nơi bạn thường nhắn tin. Sau đó xóa chữ, sửa giữa câu, chuyển cửa sổ và thử lại sau một lần đăng nhập mới. Các thao tác nhỏ này giúp phát hiện vấn đề mà một câu thử đơn lẻ dễ bỏ sót.

Nếu Fcitx5 chưa nhận Funput, chạy `fcitx5-diagnose` để kiểm tra cấu hình. Nếu chỉ một ứng dụng gặp lỗi, ghi lại tên và phiên bản ứng dụng cùng chuỗi phím tái hiện. Tham khảo [trang xử lý sự cố Linux](https://docs.funput.app/docs/install/linux/troubleshooting/) trước khi thay đổi nhiều thiết lập cùng lúc.

## Câu hỏi thường gặp

### Đang dùng UniKey trên Windows có phải học lại cách gõ không?

Nếu đang gõ Telex hoặc VNI, bạn có thể chọn kiểu tương ứng trong Funput Linux. Các tùy chọn mở rộng và hành vi trong từng ứng dụng có thể khác, nên hãy thử bằng đoạn văn thường dùng.

### Có cần chuyển sang X11 để dùng Funput không?

Không cần mặc định đổi phiên. Hãy thiết lập theo hướng dẫn cho Wayland hoặc X11 đang dùng và kiểm tra ứng dụng cụ thể. Khả năng nhập liệu còn phụ thuộc desktop, framework và ứng dụng nhận chữ.

### Funput có dùng được khi vẫn giữ máy Windows không?

Có. Bạn có thể dùng Funput trên cả hai hệ điều hành với cùng kiểu gõ. Đây là cách thử Linux từng bước; không cần chuyển toàn bộ công việc trong một lần.

**Đổi hệ điều hành, giữ cách viết của bạn.** Bắt đầu với [Funput cho Linux](/linux/), hoàn tất cấu hình nguồn nhập và viết vài dòng tiếng Việt ngay trên desktop mới.
