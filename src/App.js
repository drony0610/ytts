import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const tg = window.Telegram.WebApp;

function App() {
  const [data, setData] = useState(null);
  const [isSummaryModal, setIsSummaryModal] = useState(false);

  const [isTimecodesModal, setIsTimecodesModal] = useState(false);

  const [currentVideoTimecodesId, setCurrentVideoTimecodesId] = useState(0);

  const nodeRef = useRef(null);

  useEffect(() => {
    setData(returnMock());
  }, []);

  console.log(isTimecodesModal);

  const handleOpenTimecodesModal = (e) => {
    e.stopPropagation();
    setIsTimecodesModal(true);
  };

  const handleCloseTimecodesModal = (e) => {
    console.log("click");
    e.stopPropagation();
    setIsTimecodesModal(false);
  };

  const handleOpenSummaryModal = (e) => {
    e.stopPropagation();
    setIsSummaryModal(true);
  };

  if (!data) {
    return <div>Пусто...</div>;
  }

  // Добавить лоадер
  return (
    <>
      <div className="App">
        <h1>Ваши сохраненные видео</h1>
        <div className="cards">
          {data.map(({ posterUrl, title, name, id }, i) => (
            <div className="card">
              <a
                href={`http://www.youtube.com/watch?v=${id}`}
                className="poster"
              >
                <img src={posterUrl} alt="poster" />
              </a>
              <div className="content">
                <div className="titles">
                  <h2 className="title">{title}</h2>
                  <p className="sub_title">{name}</p>
                </div>
                <div className="buttons">
                  <div
                    className="timecodesBtn"
                    onClick={handleOpenTimecodesModal}
                  >
                    Ваши заметки
                  </div>
                  <div className="summaryBtn" onClick={handleOpenSummaryModal}>
                    Краткое содержание
                  </div>
                </div>
              </div>
              <div className="controls"></div>
            </div>
          ))}
        </div>

        <div
          className={`modalContainer ${
            isTimecodesModal && "modalContainer--open"
          }`}
        >
          <div className="timecodesContainer">
            <div onClick={handleCloseTimecodesModal}>Close</div>
            {data[currentVideoTimecodesId].userTimeCodes.map((e) => (
              <div>{e.time}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function returnMock() {
  return [
    {
      id: "-E_PV61pN08",
      title:
        "Duster ПРОВАЛИЛ Краш-тест | Показали новую TESLA! | Италия ПРОДАЕТСЯ Китаю",
      name: "Асафьев. Жизнь",
      duration: "1:07:23",
      posterUrl:
        "https://i.ytimg.com/vi/-E_PV61pN08/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAavyV1kPygHuJNDJxyEA7RGksGQA",
      userTimeCodes: [{ time: "325", commentary: null }],
      summary: [
        {
          content: "Беспилотники и их проблемы",
          id: 1,
          start_time: 0,
          theses: [Array],
        },
        {
          content: "Мальдивы и их история",
          id: 2,
          start_time: 249,
          theses: [Array],
        },
        {
          content: "Приемная комиссия Центрального университета",
          id: 3,
          start_time: 503,
          theses: [Array],
        },
        {
          content: "Марк Аврелий и его размышления",
          id: 4,
          start_time: 641,
          theses: [Array],
        },
        {
          content: "Гонка на реке",
          id: 5,
          start_time: 935,
          theses: [Array],
        },
        {
          content: "Volkswagen Amarok",
          id: 6,
          start_time: 1183,
          theses: [Array],
        },
        { content: "Zygr X", id: 7, start_time: 1312, theses: [Array] },
        { content: "Pontiac", id: 8, start_time: 1584, theses: [Array] },
        {
          content: "Суд между группой ГАЗ и Volkswagen",
          id: 9,
          start_time: 1772,
          theses: [Array],
        },
        {
          content: "Субару и их новый автомобиль",
          id: 10,
          start_time: 2015,
          theses: [Array],
        },
        {
          content: "Ауди и их спорткар",
          id: 11,
          start_time: 2212,
          theses: [Array],
        },
        {
          content: "Прототип Audi",
          id: 12,
          start_time: 2401,
          theses: [Array],
        },
        {
          content: "Ред Булл RB-17",
          id: 13,
          start_time: 2716,
          theses: [Array],
        },
        {
          content: "Краш-тест Рено Дастер",
          id: 14,
          start_time: 2807,
          theses: [Array],
        },
        {
          content: "Рено Логан и его успех",
          id: 15,
          start_time: 2999,
          theses: [Array],
        },
        {
          content: "Tesla Model 3 и ее обновление",
          id: 16,
          start_time: 3250,
          theses: [Array],
        },
        {
          content: "Audi A4 и A5",
          id: 17,
          start_time: 3365,
          theses: [Array],
        },
        {
          content: "BMW и Mercedes-Benz",
          id: 18,
          start_time: 3625,
          theses: [Array],
        },
        {
          content: "Обсуждение автомобильных брендов",
          id: 19,
          start_time: 3652,
          theses: [Array],
        },
        {
          content: "Итальянские автомобильные бренды",
          id: 20,
          start_time: 3836,
          theses: [Array],
        },
        {
          content: "Паста и пельмени",
          id: 21,
          start_time: 3936,
          theses: [Array],
        },
      ],
    },
  ];
}
