---
title: 'Unicode, TCVN3 và VNI-Windows: hiểu đúng để sửa lỗi font'
seoTitle: 'Unicode, TCVN3, VNI-Windows: bảng mã và cách chuyển | Funput'
description: 'Phân biệt Unicode, TCVN3 và VNI-Windows với kiểu gõ Telex, VNI. Hướng dẫn kiểm tra văn bản lỗi font và chuyển mã tiếng Việt bằng Funput trên máy tính.'
pubDate: 2026-09-29T00:10:00Z
draft: false
tags:
  - unicode
  - chuyen-ma
  - tieng-viet
---

Một tài liệu tiếng Việt đọc được trên máy cũ nhưng hiện ký tự lạ khi đổi font chưa chắc là lỗi của bộ gõ. Nguyên nhân có thể nằm ở **bảng mã của văn bản**. Với nội dung mới trong ứng dụng hiện đại, Unicode thường là lựa chọn phù hợp; TCVN3 và VNI-Windows chủ yếu xuất hiện khi bạn làm việc với tài liệu cũ.

Trước khi chuyển mã, hãy phân biệt ba thứ: cách nhấn phím, cách biểu diễn ký tự và hình dáng chữ trên màn hình. Hiểu đúng giúp bạn tránh đổi qua lại nhiều lần mà văn bản vẫn khó đọc.

## Kiểu gõ, bảng mã và font khác nhau thế nào?

| Khái niệm | Vai trò                                  | Ví dụ                                                |
| --------- | ---------------------------------------- | ---------------------------------------------------- |
| Kiểu gõ   | Quy tắc biến chuỗi phím thành chữ có dấu | Telex dùng `as`, VNI dùng `a1` để tạo “á”            |
| Bảng mã   | Cách biểu diễn các ký tự trong văn bản   | Unicode, TCVN3 (ABC), VNI-Windows                    |
| Font chữ  | Cách vẽ ký tự để bạn đọc trên màn hình   | Arial, Times New Roman, các font dành cho bảng mã cũ |

**Dùng kiểu gõ VNI không bắt buộc dùng bảng mã VNI-Windows.** Bạn có thể gõ bằng VNI và tạo văn bản Unicode bình thường. Tương tự, đổi từ Telex sang VNI không tự sửa được một đoạn văn đã sai bảng mã.

Nếu bạn cần học cách đặt dấu khi nhập chữ mới, hãy xem [hướng dẫn Telex và VNI](/blog/telex-vni-va-telex-nang-cao/). Bài này tập trung vào văn bản đã có sẵn.

## Unicode, TCVN3 và VNI-Windows dùng khi nào?

**Unicode** là tiêu chuẩn mã hóa ký tự dùng cho nhiều ngôn ngữ, trong đó có tiếng Việt. Nó giúp trao đổi văn bản giữa các hệ thống theo một quy ước chung. Bạn có thể đọc thêm phần [giải thích cơ bản của Unicode Consortium](https://www.unicode.org/faq/basic_q.html).

**TCVN3 (ABC)** và **VNI-Windows** là các bảng mã tiếng Việt cũ mà bạn có thể gặp trong tài liệu lưu trữ. Những tài liệu này thường đi cùng font được thiết kế cho bảng mã tương ứng. Tên font như `.VnTime` hoặc `VNI-Times` là manh mối để kiểm tra, nhưng không đủ để kết luận cho toàn bộ tài liệu: một tệp có thể chứa các đoạn được sao chép từ nhiều nguồn.

| Tình huống                                      | Hướng xử lý                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| Soạn email, bài viết hoặc tài liệu mới          | Dùng Unicode và font hỗ trợ tiếng Việt                            |
| Tài liệu cũ chỉ đọc đúng với một font nhất định | Kiểm tra bảng mã nguồn trước khi chuyển sang Unicode              |
| Đối tác yêu cầu bảng mã cũ                      | Giữ bản Unicode, tạo bản chuyển riêng và kiểm tra ký tự bị mất    |
| Tài liệu có đoạn đúng, đoạn sai                 | Xử lý từng đoạn theo nguồn, tránh chuyển cả tệp bằng một giả định |

## Đổi font có sửa được lỗi tiếng Việt không?

Đổi font có thể giúp nếu văn bản đúng nhưng font hiện tại thiếu ký tự cần hiển thị. Tuy nhiên, **đổi font không chuyển bảng mã của nội dung**. Một đoạn TCVN3 vẫn cần được chuyển đúng sang Unicode nếu bạn muốn dùng như văn bản Unicode.

Hãy thử trên bản sao: chọn một đoạn ngắn, đổi sang font hỗ trợ tiếng Việt và quan sát. Nếu chữ vẫn thành ký tự lạ, kiểm tra bảng mã. Nếu chỉ có các ô vuông, khả năng thiếu ký tự trong font cũng cần được xem xét; riêng biểu hiện này chưa đủ để xác định nguyên nhân.

Với tệp văn bản thuần, còn cần kiểm tra cách ứng dụng mở tệp đọc mã hóa. Unicode và UTF-8 không hoàn toàn đồng nghĩa: UTF-8 là một cách mã hóa Unicode thành byte. [Tài liệu của Unicode Consortium](https://www.unicode.org/faq/utf_bom.html) giải thích thêm sự khác nhau giữa UTF-8, UTF-16 và UTF-32.

## Cách chuyển mã tiếng Việt bằng Funput

Funput trên máy tính có công cụ **Chuyển mã** giữa Unicode dựng sẵn, Unicode tổ hợp, TCVN3 (ABC) và VNI-Windows. Bạn có thể bắt đầu bằng một đoạn văn ngắn để kiểm tra nguồn trước khi xử lý nhiều nội dung.

1. **Giữ bản gốc.** Tạo bản sao tài liệu, rồi chọn một đoạn có đủ dấu tiếng Việt để thử.
2. **Mở Chuyển mã.** Trên Windows, mục này nằm trong menu khi nhấp phải biểu tượng Funput ở khay hệ thống. Trên Mac, mở từ phần Công cụ của cài đặt; trên Linux, dùng Công cụ chuyển mã trong cài đặt hoặc mục Funput Chuyển mã ở menu ứng dụng.
3. **Dán đoạn văn và kiểm tra bảng mã nguồn.** Chọn bảng mã phù hợp với nội dung; nếu công cụ nhận diện nguồn, vẫn đối chiếu kết quả xem trước.
4. **Chọn bảng mã đích.** Với văn bản dùng trong ứng dụng hiện đại, thử Unicode dựng sẵn, trừ khi nơi nhận yêu cầu lựa chọn khác.
5. **Đọc kỹ kết quả và cảnh báo.** Kiểm tra các chữ ă, â, ê, ô, ơ, ư, đ cùng dấu thanh. Nếu nội dung chưa đúng, kiểm tra lại nguồn thay vì tiếp tục chuyển trên kết quả lỗi.
6. **Chép kết quả vào bản sao tài liệu.** Chọn font hỗ trợ tiếng Việt và so lại tên riêng, số liệu, dấu câu trước khi lưu.

> Quy trình dán văn bản tập trung vào nội dung chữ. Đừng mặc định rằng nó giữ nguyên bảng biểu, hình ảnh và định dạng của tài liệu Word hoặc PDF.

Bạn chưa có Funput trên máy tính? Xem bản dành cho [Windows](/windows/), [macOS](/macos/) hoặc [Linux](/linux/) để chọn đúng hệ điều hành.

## Unicode dựng sẵn và Unicode tổ hợp khác nhau ra sao?

Cả hai đều là Unicode. Với nhiều chữ có dấu, dạng dựng sẵn dùng một ký tự đã bao gồm dấu; dạng tổ hợp dùng chữ cơ sở cùng dấu kết hợp. Chúng có thể trông giống nhau trên màn hình nhưng có cách biểu diễn khác nhau bên trong.

Vì vậy, bạn không cần chuyển sang TCVN3 hay VNI-Windows chỉ vì một tài liệu dùng Unicode tổ hợp. Khi cần thống nhất dạng văn bản, hãy kiểm tra yêu cầu của ứng dụng nhận dữ liệu. [FAQ về chuẩn hóa Unicode](https://www.unicode.org/faq/normalization.html) giải thích các dạng NFC và NFD chi tiết hơn.

## Câu hỏi thường gặp

### Chữ đã biến thành dấu hỏi có khôi phục được không?

Nếu ký tự gốc đã bị thay bằng dấu hỏi và bản lỗi đã được lưu, công cụ chuyển mã không thể tự biết chữ ban đầu là gì. Hãy tìm bản gốc, lịch sử phiên bản hoặc mở lại tệp nguồn bằng cách đọc mã hóa phù hợp.

### Sao chép từ PDF bị lỗi có luôn do bảng mã không?

Không. PDF có thể có vấn đề với ánh xạ ký tự, hoặc chỉ chứa ảnh quét cần nhận dạng chữ. Chuyển TCVN3 sang Unicode không phải cách sửa chung cho mọi lỗi sao chép từ PDF.

### Văn bản cũ đọc đúng nhưng chữ mới gõ sai thì sao?

Hãy tách việc hiển thị văn bản cũ khỏi việc nhập chữ mới. Kiểm tra bộ gõ, kiểu gõ và font tại vị trí con trỏ. Bài [không gõ được tiếng Việt](/blog/khong-go-duoc-tieng-viet/) hướng dẫn kiểm tra phần nhập liệu.

**Hãy thử trên một đoạn ngắn trước.** Khi đã xác định đúng nguồn và đọc đúng kết quả, bạn sẽ có cơ sở để chuyển phần nội dung còn lại mà vẫn giữ bản gốc để đối chiếu.
