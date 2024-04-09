export interface IExercise {
  id: number;
  title: string;
  img: string;
  target: string;
  requirement: string;
  instruction: {
    start: string;
    perform: string;
    time: string;
    caution: string
  }
}

export const exercises: IExercise[] = [
  {
    id: 1,
    title: 'Đi bộ',
    img: 'https://www.thethaothientruong.vn/uploads/contents/nguoi-gia-di-bo-nhieu-co-tot-khong.jpg',
    target: ` Tăng cường sức khỏe tim mạch và hô hấp.
    Kiểm soát đường huyết và giảm nguy cơ biến chứng của bệnh tiểu đường.
    Tăng cường sự linh hoạt và sức mạnh cơ bắp.
    Giảm căng thẳng và cải thiện tâm trạng.`,
    requirement: `Đôi giày thoải mái và phù hợp, hỗ trợ chân và bảo vệ khỏi chấn thương.
    Nước uống để duy trì sự hydrat hóa.
    Máy đo đường huyết (nếu cần thiết) và các loại thuốc điều trị bệnh tiểu đường.`,
    instruction: {
      start: `Bắt đầu bằng một bài tập khởi động nhẹ nhàng trong khoảng 5-10 phút, bao gồm việc làm nóng cơ bắp và nâng cao nhịp tim.`,
      perform: `Bước ra ngoài với tốc độ vừa phải để có thể nói chuyện một cách thoải mái, không quá nhanh hoặc quá chậm.
      Duy trì tư thế thẳng lưng và đầu gối uốn cong một chút khi bước đi để giảm căng thẳng trên khớp.
      Lập kế hoạch để đi bộ ít nhất 30 phút mỗi ngày, nếu có thể.`,
      time: `Bắt đầu với một lịch trình tập luyện hợp lý, ví dụ như đi bộ 3-4 lần mỗi tuần, mỗi lần từ 15-30 phút.
      Tăng dần thời lượng và tần suất theo thời gian nếu cơ thể cho phép.`,
      caution: `Kiểm tra đường huyết trước và sau khi tập luyện, và điều chỉnh liều lượng insulin hoặc thuốc nếu cần thiết.
      Mang theo đồ ăn nhẹ hoặc cốc nước có chứa carbohydrate để ứng phó với tình trạng hạ đường huyết.
      Đảm bảo có sự giám sát khi tập luyện, đặc biệt là nếu có dấu hiệu của căng thẳng hoặc vấn đề về sức khỏe.
  Ngưng việc tập luyện và tham khảo ý kiến của bác sĩ nếu có bất kỳ vấn đề sức khỏe nào xảy ra.
      `
    }
  },
  {
    id: 2,
    title: 'yoga',
    img: 'https://www.athulyaliving.com/blogs/wp-content/uploads/2017/07/yoga-for-seniors.jpg',
    target: ` Tăng cường sự linh hoạt và sức mạnh cơ bắp.
    Giảm căng thẳng và tăng cường trạng thái tinh thần.
    Kiểm soát đường huyết và giữ cho cơ thể trong trạng thái cân bằng.
    Cải thiện tư duy và tập trung.`,
    requirement: `Thảm Yoga hoặc chiếu Yoga để tạo sự êm dịu và an toàn cho việc thực hiện các động tác.
    Quần áo thoải mái và linh hoạt để dễ dàng thực hiện các động tác.
    Nước uống để duy trì sự hydrat hóa.`,
    instruction: {
      start: `Bắt đầu bằng một thực hành nhẹ nhàng để làm ấm cơ thể và tâm trí. Hít thở sâu và thả lỏng các cơ bắp.`,
      perform: `Thực hiện các động tác Yoga nhẹ nhàng và lưu ý đến hơi thở.
      Các động tác như cánh cửa, con chó xuống và lên, cưỡi ngựa, và vườn hoa có thể thích hợp cho người già và giúp tăng cường sự linh hoạt và sức mạnh.`,
      time: `Thực hiện Yoga ít nhất 3-4 lần mỗi tuần, mỗi lần từ 15-30 phút.
      Nếu cơ thể cho phép, có thể tăng dần thời lượng và tần suất thực hiện.`,
      caution: `Yoga có thể thực hiện ở bất kỳ nơi nào thoải mái và yên tĩnh, như trong phòng khách hoặc ngoài trời vào buổi sáng.
      Thực hiện các động tác theo nhiệt độ phù hợp để tránh việc cơ thể căng thẳng hoặc gặp nguy cơ chấn thương.
      `
    }
  },
  {
    id: 3,
    title: 'Tập nhảy',
    img: 'https://kenh14cdn.com/2018/11/13/img6937-1542115212256574405299.jpg',
    target: ` Tăng cường sức khỏe tim mạch và hô hấp.
    Kiểm soát đường huyết thông qua việc tăng cường hoạt động vận động.
    Cải thiện tư duy và tập trung thông qua việc tham gia vào hoạt động vui vẻ và năng động.
    Tăng cường sự linh hoạt và sức mạnh cơ bắp.`,
    requirement: `Được thực hiện trên một bề mặt đàn hồi như thảm nhảy hoặc sàn gỗ để giảm căng thẳng trên các khớp.
    Đôi giày thể thao chất lượng để hỗ trợ chân và giảm nguy cơ chấn thương.
    Nước uống để duy trì sự hydrat hóa
    `,
    instruction: {
      start: `Bắt đầu bằng một bài tập khởi động nhẹ nhàng trong khoảng 5-10 phút, bao gồm việc làm nóng cơ bắp và nâng cao nhịp tim.            `,
      perform: `Thực hiện các động tác nhảy nhẹ nhàng như nhảy dây, nhảy múa hoặc các động tác nhảy khác.
        Đảm bảo giữ tư thế đúng đắn và đẩy cơ thể lên từ mặt đất một cách nhẹ nhàng.
        `,
      time: `Bắt đầu với một khoảng thời gian và cường độ nhảy nhẹ nhàng, sau đó tăng dần thời gian và cường độ khi cơ thể làm quen.
        Cố gắng thực hiện ít nhất 15-30 phút mỗi ngày, tùy thuộc vào khả năng cá nhân.`,
      caution: `Thực hiện các động tác nhảy ở một nơi an toàn và rộng rãi, đảm bảo không có vật cản xung quanh.
        Đồng hành với nhạc nhẹ và sôi động để tạo cảm giác vui vẻ và năng động.            
      `
    }
  },
  {
    id: 4,
    title: 'Đạp xe',
    img: 'https://xedapthegioi.vn/wp-content/uploads/2019/02/huong-dan-di-xe-dap-cho-nguoi-cao-nien-1.jpg',
    target: ` Tăng cường sức khỏe tim mạch và hô hấp.
    Kiểm soát đường huyết thông qua việc tăng cường hoạt động vận động.
    Cải thiện sự linh hoạt và sức mạnh cơ bắp.
    Giảm căng thẳng và tăng cường trạng thái tinh thần.`,
    requirement: `Xe đạp tĩnh hoặc xe đạp chạy ngoài trời.
    Được thực hiện trên bề mặt phẳng và không gian an toàn.
    Nước uống để duy trì sự hydrat hóa.`,
    instruction: {
      start: `Bắt đầu bằng một bài tập khởi động nhẹ nhàng trong khoảng 5-10 phút, bao gồm việc làm nóng cơ bắp và nâng cao nhịp tim.`,
      perform: `Thực hiện việc đạp xe với tốc độ và cường độ phù hợp với khả năng cá nhân.
        Đảm bảo giữ tư thế đúng đắn và lưu ý đến sự thoải mái khi đạp xe.`,
      time: `Bắt đầu với một khoảng thời gian và cường độ đạp xe nhẹ nhàng, sau đó tăng dần thời gian và cường độ khi cơ thể làm quen.
        Cố gắng thực hiện ít nhất 15-30 phút mỗi ngày, tùy thuộc vào khả năng cá nhân.`,
      caution: `Đạp xe có thể thực hiện trong nhà hoặc ngoài trời, tùy thuộc vào điều kiện thời tiết và sở thích cá nhân.
        Thưởng thức cảnh quan hoặc nghe nhạc nhẹ để tạo cảm giác thoải mái và thư giãn trong suốt buổi tập.
      `
    }
  },
]
export const advancedExericses: IExercise[] = [
  {
    id: 5,
    title: 'Bơi lội',
    img: 'https://hocboi.edu.vn/wp-content/uploads/2015/07/hocboi.edu_.jpg',
    target: ` Tăng cường sức khỏe tim mạch và hô hấp.
    Kiểm soát đường huyết thông qua việc tăng cường hoạt động vận động.
    Cải thiện sự linh hoạt và sức mạnh cơ bắp.
    Giảm căng thẳng và tăng cường trạng thái tinh thần.`,
    requirement: `Bể bơi có điều kiện an toàn và sạch sẽ.
    Áo lót và đồ bơi phù hợp để đảm bảo sự thoải mái và hỗ trợ.
    Kính bơi để bảo vệ mắt khỏi nước.`,
    instruction: {
      start: `Bắt đầu bằng một bài tập khởi động nhẹ nhàng bên ngoài hoặc trong nước trong khoảng 5-10 phút để làm ấm cơ bắp.`,
      perform: `Bơi với tốc độ và phong cách phù hợp với khả năng cá nhân. Bơi tự do, bơi sải tay, hoặc bơi lội đều là các phong cách phổ biến có thể thử.
        Đảm bảo lấy hơi đều đặn và sâu khi bơi để duy trì lượng oxy trong cơ thể.`,
      time: `Bắt đầu với một khoảng thời gian và cường độ bơi nhẹ nhàng, sau đó tăng dần thời gian và cường độ khi cơ thể làm quen.
        Cố gắng thực hiện ít nhất 15-30 phút mỗi ngày, tùy thuộc vào khả năng cá nhân.`,
      caution: `Bơi lội có thể thực hiện trong nhà hoặc ngoài trời, tùy thuộc vào điều kiện thời tiết và sở thích cá nhân.
        Hãy tận hưởng quá trình bơi lội và tận dụng không gian yên tĩnh để thư giãn và tập trung.`
    }
  },
  {
    id: 6,
    title: 'Cardia',
    img: 'https://thethaominhphu.vn/wp-content/uploads/2021/06/nguoi-gia-tap-luyen-voi-may-chay-bo.jpg',
    target: ` Tăng cường sức khỏe tim mạch và hô hấp.
    Kiểm soát đường huyết thông qua việc tăng cường hoạt động vận động.
    Đốt cháy calo và giảm cân nếu cần.
    Cải thiện tinh thần và tăng cường năng lượng.`,
    requirement: `Sàn nhà rộng rãi và sạch sẽ.
    Áo lót và giày thể thao phù hợp để đảm bảo sự thoải mái và hỗ trợ.
    Bình nước để uống nước trong suốt buổi tập.`,
    instruction: {
      start: `Bắt đầu với một bài tập khởi động nhẹ nhàng trong khoảng 5-10 phút để làm ấm cơ bắp và chuẩn bị tinh thần.`,
      perform: `Lựa chọn các hoạt động cardio như đi bộ nhanh, bơi lội, đạp xe tĩnh, nhảy dây, hoặc sử dụng máy chạy bộ.
        Thực hiện hoạt động trong khoảng 20-30 phút với mức độ vừa phải và thoải mái.
        Đảm bảo duy trì tần suất đánh đốp đều đặn và hít thở đều.`,
      time: `Bắt đầu với mức độ và thời gian thích hợp cho cơ thể và tăng dần dần theo thời gian.
        Nếu cảm thấy mệt mỏi hoặc không thoải mái, hãy nghỉ ngơi và giảm cường độ hoặc thời gian tập luyện.`,
      caution: `Kết thúc bài tập với một đoạn giãn cơ và thở sâu để giúp cơ thể hồi phục và giảm căng thẳng.
      `
    }
  },
]


export interface INutrition {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const nutritions: INutrition[] = [
  {
    id: 1,
    name: 'Trà xanh và tiêu đen',
    image: 'https://phongkim.vn/wp-content/uploads/2019/09/pasted-image-0-25.png',
    description: `Những thực phẩm này giàu vitamin C, E, beta - carotene và flavanoids giúp vô hiệu hóa các gốc tự do, chía khóa giúp trẻ đẩy lùi bệnh tật.
    • Đậu đen, đậu đỏ
    • Nho đỏ, nho tím
    • Mận
    • Táo
    • Socola đen, cacao
    • Dầu olive
    • Dâu tây
    • Cherry
    • Việt quất
    • Cà rốt
    • Khoai lang
    • Kiwi
    • Rau xanh`
  },
  {
    id: 2,
    name: 'Thực phẩm giàu protein',
    image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2021/7/2/926396/IMG_5531.jpg?w=660',
    description: `Thực phẩm giàu protein là những thực phẩm chứa lượng lớn protein so với các loại thực phẩm khác. Protein là một trong những loại chất dinh dưỡng quan trọng nhất cần thiết cho sự phát triển, sửa chữa và duy trì các tế bào và mô trong cơ thể. Protein cũng đóng vai trò quan trọng trong quá trình tổng hợp hormon và enzym, cũng như trong việc hỗ trợ hệ miễn dịch và sự hoạt động của cơ bắp.
    
    • Thịt gia cầm
    • Thịt cá
    • Sữa
    • Hạt và đậu
    • Ngũ cốc
    `
  },
  {
    id: 3,
    name: 'Thực phẩm có chỉ số đường huyết thấp',
    image: 'https://vienhuyethoc.vn/wp-content/uploads/2023/03/Chi-so-duong-huyet-cua-thuc-pham.png',
    description: `Thực phẩm có chỉ số đường huyết thấp là những loại thực phẩm có khả năng làm tăng đường huyết chậm và ổn định sau khi ăn, giúp kiểm soát lượng đường trong máu hiệu quả. Các loại thực phẩm này thường chứa carbohydrate phức tạp, chất xơ và chất béo không no, làm chậm quá trình hấp thụ đường trong máu.
      • Rau cải xanh và rau quả
      • Các loại hạt và hạt có vỏ
      • Quả hạnh nhân và quả hạch giống
      • Hạt và đậu
      • Các loại đậu
      `
  },
]


export interface IMusic {
  id: number;
  image: string;
  title: string;
  author: string;
  url: string;
}

export const musics: IMusic[] = [
    {
      id: 1,
      image: 'https://vnmedia2.monkeyuni.net/upload/web/img/nhac-thien-thai-giao-mp3-5.jpg',
      title: 'Nhạc Thiền',
      author: 'Nhạc Thiền Tịnh Tâm',
      url: 'ciqJpsyWAB0'
    },
    {
      id: 2,
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAgBfhieEDvW7Y7WFVd66-chmz_c8OQ072qxQsDv1jRJGBSgciimXCG2Z7INQbl1q3DpDSWPVBjHUdpkwomrJki1TgB42P_TXp8fNFxznuu5YwG0J6rTaCTfUzeYm7bsU-f3syEvIh0sw/s640/nha-su-can-nghe-nhac-thien-tinh-tam-chang-031219.jpg',
      title: 'Nhạc Thiền',
      author: 'Nguyễn Duy Giang',
      url: '-FE5ezwmHKo'
    },
    {
      id: 3,
      image:'https://loiphong.vn/uploaded/10.GOC-TU-VAN/109.nhac-thien/Nhac-thien-1.jpg',
      title: 'Nhạc Thiền',
      author: 'Live Well',
      url: 'r3gRcVd1swk'
    },
]


export const checkByBloodSugar = (blood: number, isEaten: string) => {
  let status, advice;
  if (blood < 70.1 && isEaten === "0") {
    status = "Nguy cơ huyết đường thấp (hypoglycemia).",
      advice = `Nếu bạn cảm thấy mệt mỏi, run rẩy, hoặc có các triệu chứng của đái tháo đường thấp, hãy ăn ngay lập tức hoặc uống một ít đồ uống có đường, như nước trái cây hoặc nước có gas có chứa đường.
    Sử dụng các sản phẩm có chứa glucose như viên kẹo hoặc gel glucose để nhanh chóng tăng mức đường huyết nếu cần thiết.
    Thảo luận với bác sĩ về việc điều chỉnh liều lượng insulin hoặc các loại thuốc khác nếu cần thiết để tránh tình trạng hypoglycemia.`
  }
  else if ((blood > 70.1 && blood < 99.1 && isEaten === "0") || (blood > 70.1 && blood < 140.1 && isEaten === "1")) {
    status = "Phù hợp (normal)"
    advice = `Tiếp tục duy trì chế độ ăn uống lành mạnh và lịch tập luyện thường xuyên.
    Tiếp tục theo dõi đường huyết đều đặn và ghi chép kết quả để đảm bảo sự ổn định.
    Tham khảo ý kiến của bác sĩ nếu có bất kỳ thay đổi đột ngột hoặc vấn đề liên quan đến sức khỏe.`
  }
  else if ((blood > 100.1 && blood < 125.1 && isEaten === "0") || (blood > 140.1 && blood < 199.1 && isEaten === "1")) {
    status = "Nguy cơ tiền đái tháo đường (prediabetes)"
    advice = `Tăng cường hoạt động thể chất và giảm cân nếu cần thiết để giảm nguy cơ phát triển thành tiểu đường.
    Tìm hiểu về chế độ ăn uống lành mạnh và cố gắng giảm tiêu thụ đường và thức ăn chứa carbohydrate.
    Theo dõi đường huyết thường xuyên và thảo luận với bác sĩ về việc thực hiện các bước tiếp theo để ngăn ngừa hoặc trì hoãn sự phát triển của tiểu đường.`
  }
  else if ((blood > 126.1 && isEaten === "0") || (blood > 200.1 && isEaten === "1")) {
    status = "Tiểu đường (diabetes)"
    advice = `Thực hiện các biện pháp kiểm soát đường huyết như chế độ ăn uống cân đối, tập luyện đều đặn và theo dõi đường huyết hàng ngày.
    Thảo luận với bác sĩ về việc điều chỉnh liều lượng insulin hoặc các loại thuốc khác nếu cần thiết để kiểm soát đường huyết.
    Thực hiện các biện pháp kiểm soát các yếu tố rủi ro khác như huyết áp và cholesterol.
    Thực hiện các kiểm tra sức khỏe định kỳ và tham khảo ý kiến của chuyên gia y tế để duy trì sức khỏe tốt nhất có thể.`
  }
  return { title: 'Đường huyết', status, advice }
}

export const checkByBloodPresure = (systolic: number, diastolic: number) => {
  let status, advice;
  if (systolic < 120.1 && diastolic < 80.1) {
    status = "Phù hợp (normal)"
    advice = `Tiếp tục duy trì lối sống lành mạnh với chế độ ăn uống cân đối, ít muối, ít chất béo bão hòa, và nhiều rau củ. Thực hiện hoạt động thể chất đều đặn ít nhất 30 phút mỗi ngày. Theo dõi sức khỏe bằng cách thực hiện các kiểm tra định kỳ và thảo luận với bác sĩ về bất kỳ vấn đề nào.`
  }
  else if (systolic > 120.1 && systolic < 139.1 && diastolic < 80.1) {
    status = "Tăng huyết áp tâm thu (Elevated Blood Pressure)"
    advice = `Tăng cường giám sát huyết áp và thực hiện thay đổi trong lối sống, bao gồm giảm cân nếu cần thiết, giảm tiêu thụ muối và thực phẩm có cholesterol cao, thực hiện hoạt động thể chất đều đặn và học cách giảm căng thẳng. Nếu có nhu cầu, thảo luận với bác sĩ về việc sử dụng thuốc để kiểm soát huyết áp.`
  }
  else if (systolic > 140.1 || diastolic > 90.1) {
    status = "Huyết áp cao (High Blood Pressure)"
    advice = `Thực hiện các biện pháp kiểm soát huyết áp nghiêm ngặt, bao gồm thực hiện chế độ ăn uống giàu chất xơ, giảm tiêu thụ muối và chất béo bão hòa, tập thể dục đều đặn, duy trì cân nặng ổn định, và hạn chế tiêu thụ cồn và thuốc lá. Thảo luận với bác sĩ về việc sử dụng thuốc điều trị huyết áp và thực hiện theo dõi sức khỏe định kỳ.`
  }
  else if (systolic > 180.1 || diastolic > 120.1) {
    status = "Huyết áp cực cao (Hypertensive Crisis)"
    advice = `Đây là tình trạng cấp cứu y tế. Hãy gọi ngay 911 hoặc đi đến bệnh viện gần nhất để được điều trị ngay lập tức. Không tự điều trị trong tình trạng này.`
  }
  return { title: "Huyết áp", status, advice }
}