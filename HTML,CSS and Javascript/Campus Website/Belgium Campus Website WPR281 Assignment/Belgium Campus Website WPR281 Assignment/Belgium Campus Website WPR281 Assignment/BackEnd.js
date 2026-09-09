document.addEventListener("DOMContentLoaded", () => {
  const coursesButton = document.getElementById("courses-button");
  const searchButton = document.getElementById("search-button");
  const printButton = document.getElementById("print-course");
  const contactButton = document.getElementById("contact-button");
  const courseDetailsSection = document.getElementById("course-details");
  const contactSection = document.getElementById("contact");

  // Function to display courses (similar to search functionality)
  const displayCourses = () => {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Clear existing courses

    // Fetch or generate course data
    const courses = [
      {
        name: "Bachelor of Computing",
        code: "Code: 181",
        duration: "Duration: 4 years",
        description:
          "Description: You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.",
        FirstYearModules:
          "1st Year Modules: MAT181, STA181, PRG181, LPR181, COA181, PRG182, DBD181, WPR181, ACW181, NWD181, INF181, INL101, INL102. Electives: ENT181/BUM181.",
        SecondYearModules:
          "2nd Year Modules: PMM281,  DBD281, LPR281, STA281, MAT281, WPR281, PRG281, INF281, PRG282, INL201, INL202. Electives: SAD281/DWH281 and IOT281/SWT281.",
        ThirdYearModules:
          "3rd Year Modules: RSH381, DBD381, LPR381, INL321, MLG381, PRJ381, PMM381, PRG381, SEN381, WPR381, BIN381, DBA381, STA381, INM381, MLG382, UAX381.",
        FourthYearModules: "4th Year: AIT481, AIT482, DST481.",
        video: " Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: "SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers:
          " Lecturers: Mr S. Zengeni, Mr S. Zengeni, Mr. M. Combrinck, Mr R. Hood",
      },
      {
        name: "Bachelor of Information Technology",
        code: "Code: 171",
        duration: "Duration: 4 years",
        description:
          "Description: This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.",
        FirstYearModules:
          "1st Year Modules: MAT171, STA171, PRG171, COA171, ENG171, PRG172, DBD171, WPR171, ENT171/BUM171, ACW171, NWD171, INF171, INL101, INL102.",
        SecondYearModules:
          "2nd Year Modules: CNA271, DBD271, ERP271, ETH271, INF271, INL201, INL202, LPR171, PRG271, PRG272, PMM271, STA271, WPR271 IOT271/SWT271.",
        ThirdYearModules:
          " 3rd Year Modules: BIN371, CNA371, DAL371, DBD371, INL371, PRG371, PRJ371, PMM371, SAD371, SEN371, WPR371, INM371, UAX371.",
        FourthYearModules: " Fourth Year Modules: N/A",
        video: " Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: "SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers:
          " Lecturers: Mr. P Moila, M. Chiruka, S. Makweche, S. Laubscher",
      },
      {
        name: "Diploma in Information Technology",
        code: " Code: 161",
        duration: "Duration: 3 years",
        description:
          "Description: This academic programme will transform you into a well-rounded professional through a strong focus on knowledge, execution, and professional and practical skills. You will also have the incredible opportunity to complete 6 months of in-service training at an external company or in a simulated work environment.",
        FirstYearModules:
          " 1st Year Modules: BUC161, BME161, COA161, DBC161, DBF161, EUC161, INL161, IOT161, MAT161, NWD161, PRS161, PRG161, PRPR161, WPR161, STA161.",
        SecondYearModules:
          " 2nd Year Modules: DBD261, ERP261, INL261, ILE261, PMM261. 2nd Year electives(Infrastructure): CNA261, IOT261, OPS261, OPS262, OPS263, SEC261 / (Software development): PRG261, PRG262, SWA261, SWT261, SWT262/UXD261, WPR261.",
        ThirdYearModules: " 3rd Year Modules: N/A",
        FourthYearModules: " 4th Year Modules: N/A",
        video: "Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: "SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers: " Lecturers: E. Rynners, E. Cheten, R. Hood, O.Lulembo",
      },
      {
        name: "Diploma for deaf students",
        code: " Code: 151",
        duration: " Duration: 1 year",
        description:
          "Description: We have made this course accessible to our Deaf students by: Providing a customised curriculum for students who use South African Sign Language (SASL) as their preferred method of communication.",
        FirstYearModules:
          "1st and 2nd Year Modules: MAT151, COA151, DBD151, EUC151, ENG151, INF151, INL101, INL102, NWD151, PRG151, PRG152, WPR151. Electives: BUM151/ENT151.",
        ThirdYearModules:
          "3rd Year Modules: INF251, INL201, OPS251, PRJ251, PMM251, SEC251. 2nd Year electives(Infrastructure): DBA251, NWD251, NWD252, OPS252, SVA251, WLN251 or (Software Development): DBD251, DBM251,PRG251, PRG252, WPR251, WPR252. Electives:ERP251/IOT251.",
        FourthYearModules: "4th Year Module: AIT350",
        video: " Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: " SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers:
          "Lecturers: A. Magaudini, R. Sithole, I. Sadek, E. Shayamano",
      },
      {
        name: "Certificate: Information Technology (Database Development)",
        code: "Code: 251",
        duration: "Duration: 1 year",
        description:
          "Description: With the above in mind, it is not surprising that the demand for skilled data experts with advanced database skills is ever-increasing. This qualification will give you these skills and allow you to enter the job market quickly.",
        FirstYearModules:
          " 1st Year Module: INF251, INL201, OPS251, PRJ251, PMM251, SEC251, MAT151. Fundementals: DBD251, DBM251, PRG251, PRG252, WPR251, WPR252. Electives: ERP251/IOT251.",
        SecondYearModules: " Second Year Modules: N/A",
        ThirdYearModules: " Third Year Modules: N/A",
        FourthYearModules: " Fourth Year Modules: N/A",
        video: " Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: "SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers:
          " Lecturers: D. Steyn, Mr S. Zengeni, Miss M. Magorimbo, Mr. M. Combrinck",
      },
      {
        name: "National Certificate: Information Technology",
        code: "Code: 151",
        duration: "Duration: 1 year",
        description:
          " Description: On completion of this qualification, you will possess a specialised set of skills that will allow you to work in areas of systems development with confidence. You will gain a solid grasp of computer industry concepts and learn to expertly design, develop, test, and document software solutions needed in today’s business environment. You will also gain the necessary undergraduate foundation to further your studies in the IT field, should you wish.",
        FirstYearModules:
          "1st Year Module: MAT151, COA151, DBD151, EUC151, ENG151, INF151, INL101, INL102, NWD151, PRG151, PRG152, WPR151, Electives: BUM151/ENT151.",
        SecondYearModules: " Second Year Modules: N/A",
        ThirdYearModules: " Third Year Modules: N/A",
        FourthYearModules: " Fourth Year Modules: N/A",
        video: " Video: https://youtube.com/watch?v=CEwG8Btauiw&feature=shared",
        studyGuide: "SQL by Example (ebscohost.com)",
        venue: " Venue: On-campus or Online",
        lecturers:
          " Lecturers: Miss J. Blignaut, Mr. H. van Nierkerk, S. Thamaga, G. Modimola",
      },
    ];

    courses.forEach((course) => {
      const courseItem = document.createElement("div");
      courseItem.className = "course-item";
      courseItem.innerHTML = `<h3>${course.name}</h3>`;
      courseList.appendChild(courseItem);

      courseItem.addEventListener("click", () => {
        // Display course details
        document.getElementById(
          "course-content"
        ).innerHTML = `<h3>${course.name}</h3><p>${course.description}</p><p>${course.code}</p>
        <p>${course.duration}</p>
        <p>${course.FirstYearModules}</p>
        <p>${course.SecondYearModules}</p>
        <p>${course.ThirdYearModules}</p>
        <P>${course.FourthYearModules}</p>
          <p>${course.venue}</p>
          <p>${course.lecturers}</p>
          <a href="${course.video}"target="_blank">Watch Video</a>
          <a href="${course.studyGuide}"target="_blank">Download Study Guide</a>
          
        `;
        courseDetailsSection.classList.remove("hidden");
        courseDetailsSection.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  // Function to handle printing
  const handlePrint = () => {
    window.print();
  };

  // Event listeners
  coursesButton.addEventListener("click", displayCourses);
  printButton.addEventListener("click", handlePrint);
  searchButton.addEventListener("click", displayCourses);
  contactButton.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });

  // Event listener for the enroll button to navigate to the enrollment page
  const enrollButtons = document.querySelectorAll("#enroll-course");
  enrollButtons.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "enroll.html";
    });
  });
});
