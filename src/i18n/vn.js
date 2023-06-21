const translation = {
  pages: {
    login: {
      title: 'Đăng nhập',
      description:
        'Vui lòng đăng nhập để có thể sử dụng được nhiều tính năng hơn.',
      email: 'Email',
      phone: 'Số điện thoại',
      emailAddress: 'Địa chỉ email',
      password: 'Mật khẩu',
      forgotPassword: 'Quên mật khẩu?',
      noAccount: 'Chưa có tài khoản?',
      register: 'Đăng ký',
      wrongEmailFormat: 'Sai định dạng email. Vui lòng nhập lại',
      wrongPassword: 'Sai mật khẩu. Vui lòng thử lại',
    },
    register: {
      index: {
        title: 'Đăng ký',
        description:
          'Bạn có thể tạo tài khoản bằng cách chọn nhập email hoặc số điện thoại.',
        continue: 'Tiếp tục',
        email: 'Email',
        phone: 'Số điện thoại',
        emailAddress: 'Địa chỉ email',
        continueText: 'Bằng cách click vào “Tiếp tục”, bạn đồng ý với ',
        termsOfService: 'Điều khoản dịch vụ của ViNet',
        wrongEmailFormat: 'Sai định dạng email. Vui lòng nhập lại',
      },
      otp: {
        title: 'Xác thực OTP',
        description: 'Vui lòng nhập mã OTP được gửi tới email:',
        continue: 'Tiếp tục',
        timer: 'Gửi lại sau 59 giây',
        notReceivedCode: 'Chưa nhận được mã OTP?',
        resend: 'Gửi lại mã',
        second: 'giây',
      },
      information: {
        title: 'Thông tin tài khoản',
        description:
          'Vui lòng nhập tên hiển thị và mật khẩu cho lần đăng nhập tiếp theo',
        completed: 'Hoàn tất',
        displayName: 'Tên hiển thị',
        password: 'Mật khẩu',
        repassword: 'Xác nhận mật khẩu',
        confirm: 'Xác nhận',
        cancel: 'Huỷ',
        modalTitle: 'Xác nhận trở về',
        modalDesc: 'Tất cả thông tin bạn nhập sẽ bị mất. Bạn chắc chứ?',
      },
    },
    home: {
      hello: 'Chào',
      adsTitle: 'Đón Tết bình an, Deal về ngập tràn',
      watchNow: 'Xem ngay',
    },
    search: {
      title: 'Tìm kiếm',
      placeholder: 'Tìm kiếm chiến dịch, nhà cung cấp, sản ph...',
      notFound: {
        title: 'Không có kết quả',
        description:
          'Có 0 kết quả với từ khoá bạn vừa tìm. Vui lòng nhập từ khoá mới',
      },
    },
    qrcode: {
      title: 'Quét mã QR',
      toCenter: 'Di chuyển mã đến trung tâm camera, mã sẽ được quét tự động',
      onlyQRArea: 'Chọn ảnh có chứa duy nhất 01 mã QR code',
      download: 'Tải từ',
      photoLib: 'Thư viện ảnh',
      info: 'Chọn ảnh có chứa duy nhất 01 mã QR code',
      modal: {
        success: {
          title: 'Quét mã thành công',
          description: 'Bạn vừa gia nhập vào hệ thống GoStudio',
        },
        error: {
          title: 'Lỗi quét mã',
          description: 'Mã QR bạn vừa quét không hợp lệ. Vui lòng thử lại',
        },
      },
      confirm: 'Xác nhận',
    },
    management: {
      title: 'Quản lý',
      created: 'Sản phẩm đã tạo',
      my: 'Chiến dịch của tôi',
      joined: 'Chiến dịch tôi tham gia',
    },
    createProduct: {
      title: 'Thêm sản phẩm',
      product: {
        name: 'Tên sản phẩm',
        price: 'Giá sản phẩm',
        link: 'Link mua sản phẩm',
        linkPlaceholder: 'Nhập link mua sản phẩm',
        description: 'Mô tả sản phẩm',
        unit: 'Đơn vị tính',
      },
      save: 'Lưu sản phẩm',
    },
    onboarding: {
      pages: {
        title1: 'Mạng lưới thông minh',
        subtitle1:
          'Mạng lưới người bán - nhà phân phối (người giới thiệu) - người mua, giới thiệu trực tiếp sản phẩm, dịch vụ tới người dùng.',
        title2: 'Người tiêu dùng thông minh',
        subtitle2:
          'Tìm kiếm sản phẩm, dịch vụ tốt nhất, giá tốt nhất thông qua những người giới thiệu uy tín nhất.',
        title3: 'Nhà phân phối hàng đầu',
        subtitle3:
          'Trở thành người bán, nhà phân phối để bắt đầu gia tăng doanh số, thu nhập. Khởi nghiệp từ 0 đồng.',
      },
      continue: 'Tiếp tục',
      skip: 'Bỏ qua',
      join: 'Tham gia ngay',
    },
    setting: {
      index: {
        title: 'Thiết lập',
        account: 'Tài khoản',
        language: 'Ngôn ngữ',
        notification: 'Thông báo',
        security: 'Bảo mật',
        logout: 'Đăng xuất',
        modal: {
          title: 'Xác nhận đăng xuất?',
          desc: 'Bạn muốn đăng xuất tài khoản ra khỏi thiết bị này?',
          confirm: 'Xác nhận',
          cancel: 'Huỷ',
        },
      },
      account: {
        setting: 'Tài khoản',
        name: 'Họ và tên',
        email: 'Email',
        phone: 'Số điện thoại',
        changePassword: 'Đổi mật khẩu',
        save: 'Lưu',
        update: 'Cập nhật',
        currentPassword: 'Mật khẩu hiện tại',
        currentPwdPlaceholder: 'Nhập mật khẩu hiện tại',
        newPassword: 'Mật khẩu mới',
        newPwdPlaceholder: 'Nhập mật khẩu mới',
        repeatNewPassword: 'Xác nhận mật khẩu mới',
        repeatNewPwdPlaceholder: 'Xác nhận mật khẩu mới',
        notMatchPwds: 'Mật khẩu mới không được trùng với mật khẩu hiện tại',
        modal: {
          title: 'Đổi mật khẩu thành công',
          desc: 'Mật khẩu của bạn đã được đổi thành công. Vui lòng đăng nhập lại',
          button: 'Xác nhận',
        },
      },
      language: {
        language: 'Ngôn ngữ',
      },
      notification: {
        notification: 'Thông báo',
        alarm: 'Phát âm báo khi đang mở ứng dụng',
        vibrate: 'Rung khi đang mở ứng dụng',
        allow: 'Cho phép nhận thông báo',
      },
      security: {
        security: 'Bảo mật',
        setPasscode: 'Đặt mã khoá cho ViRef',
        shortSetPasscode: 'Đặt mã khoá',
        enterCode: 'Nhập mã khoá',
        reenterCode: 'Nhập lại mã khoá',
        continue: 'Tiếp tục',
        complete: 'Hoàn tất',
        enterCurrentCode: 'Nhập mã khoá hiện tại',
        enterNewCode: 'Nhập mã khoá mới',
        reenterNewCode: 'Nhập lại mã khoá mới',
        updateCode: 'Đổi mã khoá',
        modal: {
          title: 'Đổi mã khoá thành công',
          desc: 'Mật khẩu của bạn đã được đổi thành công. ',
          button: 'Xác nhận',
        },
      },
    },
    detailCampaign: {
      title: 'GoStudio',
      gs: {
        title: 'Gói tài khoản GoStudio Premium dành cho doanh nghiệp',
        desc: 'Trao tặng token lên đến 100 VREF',
        buy: 'Mua hàng',
        refer: 'Giới thiệu bạn bè',
      },
      about: {
        review: '1k đánh giá',
        endDate: 'Ngày kết thúc',
        remaining: 'VREF còn lại',
        bonus: 'Thưởng top đại lý',
        participation: 'Tham gia',
        manufacture: 'Nhà cung cấp',
        category: 'Danh mục',
        software: 'Phần mềm',
        people: 'Người',
      },
      introduce: {
        title: 'Giới thiệu',
        desc: 'Bạn yêu thích bán hàng online? Bạn đang tìm 1 giải pháp livestream có thể cải thiện thu nhập hiện tại mà không cần bỏ ra thêm bất kỳ chi phí nào? Hãy sử dụng GoStudio - p...',
        more: 'Xem thêm',
      },
      tabs: {
        information: 'Thông tin',
        statistical: 'Thống kê',
        rating: 'Xếp hạng',
      },
      information: {
        campaignInformation: {
          title: 'Thông tin chiến dịch',
          eventDate: 'Ngày diễn ra',
          endDate: 'Ngày kết thúc',
          category: 'Danh mục',
          bonus: 'Tổng quỹ thưởng VREF',
        },
        updated: {
          title: 'Cập nhật lúc',
          participants: 'Số người tham gia',
          remaining: 'Quỹ VREF còn lại ',
          bonusFund: 'Quỹ thưởng top đại lý',
        },
        prize: {
          title: 'Thông tin chia thưởng',
        },
        supplier: {
          title: 'Thông tin nhà cung cấp',
          manufacture: 'Nhà cung cấp',
          totalCampaigns: 'Tổng số chiến dịch',
          productCount: 'Số lượng sản phẩm trên sàn',
          totalOrders: 'Tổng đơn hàng đã bán',
        },
        review: {
          title: 'Đánh giá sản phẩm',
          writeReview: 'Viết đánh giá',
        },
        supplierProducts: {
          title: 'Sản phẩm cùng nhà cung cấp',
        },
      },
      statistical: {
        incomeChart: {
          title: 'Biểu đồ thu nhập',
          hours: '24 giờ',
          week: 'Tuần',
          month: 'Tháng',
          five: 'Năm',
        },
        agentDevChart: {
          title: 'Biểu đồ phát triển đại lý',
          hours: '24 giờ',
          week: 'Tuần',
          month: 'Tháng',
          five: 'Năm',
        },
        orderList: {
          title: 'Danh sách đơn hàng',
          order: 'Đơn hàng',
        },
        agents: {
          title: 'Danh sách đại lý cấp',
          agent: 'đại lý',
        },
      },
      rating: {
        dealerOrdersRanking: {
          title: 'Xếp hạng theo đơn hàng của đại lý *',
          tip: 'Đơn hàng do đại lý bán trực tiếp',
          orders: 'đơn hàng',
          updated: 'Cập nhật lúc',
        },
        ordersRanking: {
          title: 'Xếp hạng theo đơn hàng của đại lý cấp 1*',
          tip: 'Đơn hàng do đại lý cấp 1 bán trực tiếp',
          updated: 'Cập nhật lúc',
          orders: 'đơn hàng',
        },
      },
    },
    campaignRating: {
      allReview: 'Tất cả đánh giá',
      writeReview: 'Viết đánh giá',
      sortby: 'Sắp xếp theo',
      latest: 'Mới nhất',
      oldest: 'Cũ nhất',
      writeRating: {
        title: 'Viết đánh giá',
        review: {
          title: 'Tiêu đề',
          description: 'Nội dung (Không bắt buộc)',
          tip: 'Đánh giá sau khi gửi không thể thay đổi hoặc chỉnh sửa',
          policy:
            'Tôi hoàn toàn đồng ý với các Điều khoản sử dụng của ViRef. Tôi  hoàn toàn chịu trách nhiệm về nội dung đánh giá do mình cung cấp.',
          submit: 'Gửi đánh giá',
        },
        modal: {
          title: 'Xác nhận trở về',
          desc: 'Tất cả thông tin bạn nhập sẽ bị mất và không thể hoàn tác. Bạn chắc chứ?',
          confirm: 'Xác nhận',
          cancel: 'Huỷ',
        },
      },
    },
    wallet: {
      title: 'Ví của tôi',
    },
    selectedWallet: {
      title: 'Ví VAN của tôi',
      receive: 'Nhận',
      swap: 'Hoán đổi',
      send: 'Gửi',
      analysticChart: {
        title: 'Biểu đồ phân tích',
        day: 'ngày',
        month: 'tháng',
      },
      transactionHistory: {
        title: 'Lịch sử giao dịch',
        view: 'Xem thống kê',
        month: 'Tháng',
      },
    },
    swap: {
      title: 'Hoán đổi',
      placeholder: 'Nhập số VAN muốn hoán đổi',
      recipients: 'Nơi nhận',
    },
    send: {
      title: 'Gửi',
      van: {
        label: 'Số lượng VREF muốn gửi',
        placeholder: 'Nhập số VAN muốn gửi',
      },
      fee: 'Phí gửi',
      walletAddress: {
        label: 'Địa chỉ ví nhận',
        placeholder: 'Vui lòng địa chỉ ví nhận hoặc quét mã QR',
      },
      received: 'Thực nhận',
    },
    receive: {
      title: 'Nhận',
      understood: 'Đã hiểu',
      walletAddress: "Địa chỉ ví nhận"
    },
  },
  components: {
    textField: {
      show: 'Hiện',
      hide: 'Ẩn',
    },
    phoneNumberInput: {
      phone: 'Số điện thoại',
    },
    featuredCampaignes: {
      title: 'Chiến dịch nổi bật',
      view: 'Xem thống kê',
    },
    excitingCampaignes: {
      title: 'Chiến dịch hấp dẫn',
      topParticipating: 'Top tham gia',
      topBonuses: 'Top tiền thưởng',
      topPaid: 'Top trả thưởng',
    },
    joinedCampaignes: {
      title: 'Chiến dịch tôi tham gia',
      remainTime: 'Thời gian còn lại',
      remainTokens: 'Số token còn lại',
    },
    myCampaignes: {
      title: 'Chiến dịch của tôi',
    },
  },
  common: {
    continue: 'Tiếp tục',
    seeMore: 'Xem thêm',
    convert: 'Hoán đổi',
    send: 'Gửi',
  },
};
export default translation;
