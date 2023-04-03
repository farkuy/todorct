import {useEffect, useMemo, useState} from "react";
import cl from './Styles/App.css'

import PostNow from "./Pages/PostNow";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./Header";
import OldTusk from "./Pages/OldTusk";
import FinishTusks from "./Pages/FinishTusks";



// ЕБАТЬ, МИША, РАЗГРЕБИ ЭТИ  ЗАВАЛЫ ПО КОМПОНЕНТАМ
function App() {
    const startTusk = [
        {
            userId: 1,
            userName: `Алешка`,
            numQuest: `Покакать`,
            title: "delectus aut autem",
            completed: false
        },
        {
            userId: 2,
            userName: `Алешка`,
            numQuest: `Попис`,
            title: "auis ut nam facilis et officia qui",
            completed: false
        },

        {
            userId: 3,
            userName: `Миша`,
            numQuest: `Есть`,
            title: "suscipit repellat esse quibusdam voluptatem incidunt",
            completed: false
        },
        {
            userId: 4,
            userName: `Миша`,
            numQuest: `Пить`,
            title: "distinctio vitae autem nihil ut molestias quo",
            completed: true
        },
        {
            userId: 5,
            userName: `Антон`,
            numQuest: `Спать`,
            title: "zindex",
            completed: true
        },
    ]
  const removeTusk = [];
  const finishTusk = [];
  localStorage.setItem(`startTusk`, JSON.stringify(startTusk))
  localStorage.setItem(`oldTusk`, JSON.stringify(removeTusk));
  localStorage.setItem(`finishTusk`, JSON.stringify(finishTusk))

  return (

    <BrowserRouter>
        <div>
            <Header/>
            <div>
                <Routes>
                    <Route path={"/downTusk"} element={<OldTusk/>}/>
                    <Route path={"/tusk"} element={<PostNow/>}/>
                    <Route path={"/finish"} element={<FinishTusks/>}/>
                    <Route path="/!*" element={<Navigate to="/tusk" replace />} />
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
