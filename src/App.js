import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { fancyTimeFormat } from "./utils";

const tg = window.Telegram.WebApp;

console.log(tg);
function App() {
  const [data, setData] = useState(null);
  const [currentVideoTimecodesId, setCurrentVideoTimecodesId] = useState(0);

  const [isTimecodesModal, setIsTimecodesModal] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const nodeRef = useRef(null);

  useEffect(() => {
    setData(returnMock());
  }, []);

  console.log(isTimecodesModal);

  const handleOpenModal = (e, type = "timecodes") => {
    e.stopPropagation();
    setIsModal(true);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setIsModal(false);
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setIsTimecodesModal((prev) => !prev);
  };

  if (!data) {
    return <div>Пусто...</div>;
  }

  // Добавить лоадер
  return (
    <>
      <div
        className="App"
        style={{
          overflow: !isModal ? "auto" : "hidden",
        }}
      >
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
                  <div className="summaryBtn" onClick={handleOpenModal}>
                    Содержание и таймкоды
                  </div>
                </div>
              </div>
              <div className="controls">
                <div></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`modalContainer ${isModal && "modalContainer--open"}`}>
          <div className="timecodesContainer">
            <div className="modalHeader">
              <div className="toggler" onClick={handleToggle}>
                <div className={!isTimecodesModal && "toggleItem--active"}>
                  Содержание
                </div>

                <div className={isTimecodesModal && "toggleItem--active"}>
                  Ваши таймкоды
                </div>
              </div>
              {/* <h3>
                {isTimecodesModal
                  ? "Сохраненные таймкоды"
                  : "Краткое содержание"}
              </h3> */}

              <div className="modalClose" onClick={handleCloseModal}>
                ✖
              </div>
            </div>

            <div className="modalContent">
              <h3 className="modalTitle">
                {data[currentVideoTimecodesId].title}
              </h3>

              <h3 className="modalSubTitle">
                {data[currentVideoTimecodesId].name}
              </h3>

              {isTimecodesModal ? (
                <TimecodesList data={data[currentVideoTimecodesId]} />
              ) : (
                <SummaryList data={data[currentVideoTimecodesId]} />
              )}
            </div>
          </div>
        </div>
        <div className={`modalFade ${isModal && "modalFade--fade-in"}`}></div>
      </div>
    </>
  );
}

export default App;

function returnMock() {
  const arr = [
    {
      id: "-E_PV61pN08",
      title:
        "Duster ПРОВАЛИЛ Краш-тест | Показали новую TESLA! | Италия ПРОДАЕТСЯ Китаю",
      name: "Асафьев. Жизнь",
      duration: "1:07:23",
      posterUrl:
        "https://i.ytimg.com/vi/-E_PV61pN08/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAavyV1kPygHuJNDJxyEA7RGksGQA",
      userTimeCodes: [
        { time: "325", commentary: null },
        { time: "325", commentary: "мало текста" },
        {
          time: "325",
          commentary:
            "много разного текста, наверно даже на 2 строки. Вообще я подозреваю, что возможно и больше. Догадываюь, так сказать. Но лучше такие вещи проверять, не так ли?",
        },
      ],
      summary: [
        {
          content: "Беспилотники и их проблемы",
          id: 1,
          start_time: 0,
          theses: [{ content: "abc" }, { content: "dev" }],
        },
        {
          content: "Мальдивы и их история",
          id: 2,
          start_time: 249,
          theses: [
            { content: "abc" },
            { content: "abc" },
            { content: "dev" },
            { content: "dev" },
          ],
        },
        {
          content: "Приемная комиссия Центрального университета",
          id: 3,
          start_time: 503,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Марк Аврелий и его размышления",
          id: 4,
          start_time: 641,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Гонка на реке",
          id: 5,
          start_time: 935,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Volkswagen Amarok",
          id: 6,
          start_time: 1183,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Zygr X",
          id: 7,
          start_time: 1312,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Pontiac",
          id: 8,
          start_time: 1584,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Суд между группой ГАЗ и Volkswagen",
          id: 9,
          start_time: 1772,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Субару и их новый автомобиль",
          id: 10,
          start_time: 2015,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Ауди и их спорткар",
          id: 11,
          start_time: 2212,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Прототип Audi",
          id: 12,
          start_time: 2401,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Ред Булл RB-17",
          id: 13,
          start_time: 2716,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Краш-тест Рено Дастер",
          id: 14,
          start_time: 2807,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Рено Логан и его успех",
          id: 15,
          start_time: 2999,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Tesla Model 3 и ее обновление",
          id: 16,
          start_time: 3250,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Audi A4 и A5",
          id: 17,
          start_time: 3365,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "BMW и Mercedes-Benz",
          id: 18,
          start_time: 3625,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Обсуждение автомобильных брендов",
          id: 19,
          start_time: 3652,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Итальянские автомобильные бренды",
          id: 20,
          start_time: 3836,
          theses: [{ content: "abc" }, { content: "abc" }, { content: "dev" }],
        },
        {
          content: "Паста и пельмени",
          id: 21,
          start_time: 3936,
          theses: [],
        },
      ],
    },
  ];

  return [...arr, ...arr, ...arr, ...arr, ...arr, ...arr];
}

function TimecodesList({ data }) {
  if (!data?.userTimeCodes) {
    return (
      <div className="blocker">
        <div>Пусто</div>
      </div>
    );
  }

  return (
    <div className="timecodesList">
      {data.userTimeCodes.map((timecode) => (
        <a
          href={`http://www.youtube.com/watch?v=${data.id}&t=${timecode.time}`}
          className="timeCodeItem"
        >
          <p className="timecodeTime">{fancyTimeFormat(timecode.time)}</p>
          <p className="timecodeComm">
            {timecode.commentary ? (
              timecode.commentary
            ) : (
              <span style={{ opacity: "0.5" }}>без комментария</span>
            )}
          </p>
        </a>
      ))}
    </div>
  );
}

function SummaryList({ data }) {
  const [openedSummaryId, setOpenedSummaryId] = useState(null);
  const refs = useRef([]);

  if (!data?.summary) {
    return (
      <div className="blocker">
        <div>Пусто</div>
      </div>
    );
  }

  return (
    <div className="summaryList">
      {data.summary.map((sum, i) => (
        <div className="summaryItem">
          <div className="summaryHeader">
            <a
              href={`http://www.youtube.com/watch?v=${data.id}&t=${sum.start_time}`}
              className="summaryTime"
            >{`${fancyTimeFormat(sum.start_time)} ${sum.content}`}</a>
            <div
              className="summaryBtnAccodrdion"
              onClick={() => {
                if (openedSummaryId === i) {
                  return setOpenedSummaryId(null);
                }
                return setOpenedSummaryId(i);
              }}
            >
              <div></div>
              <div className={`${openedSummaryId !== i && "rotated"}`}></div>
            </div>
          </div>
          <div
            className={`summaryTheses`}
            style={{
              height:
                openedSummaryId === i
                  ? `${
                      refs.current[openedSummaryId]?.getBoundingClientRect()
                        ?.height
                    }px`
                  : 0,
            }}
          >
            <div ref={(el) => (refs.current[i] = el)}>
              <p>
                {sum.theses.map(({ content }) => (
                  <>
                    <span>{content}</span>
                    <br />
                  </>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
