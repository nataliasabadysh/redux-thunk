# Lesson 4
# Redux + Saga 


# Saga
- Middleware
- Managing side-effects with redux-saga
- Общение с сервером , тоисть отправка запросов 
- Общение с API web brauser, LS 
- Организация основной ассинхронной логики 

- Широкие возможности так как принце Гененраторов 

# Гененратороы
это 
 - мощьная концепция js 
 - легко тестируемость

 - Принцеп работы генераторов - это последовательность в выполнении инструкции 


# redux-thunk
- делает ту же самую работу 
- Saga - заменяет полность redux-thunk

# Saga принцепы работы 

Worker👩🏻 -> Wotcher 👀 -> Root Saga 🚴🏻 -> Store 📦


# Worker 
- выполняет любые ассинхронные операции и сайт-аффекты 
- логика программи 

# Watcher

- Наблюдатель за запушенными action's
- Говорит Worker👩🏻 работать - тоисть вызывает Worker👩🏻

- координароры саг
- следит за определенным action
 
# Root Saga

- Главный Saga-middleware - соберает все генераторы 
 (RootReducer - соберает reducer)

- здесь живут все саги-генераторы программы 
- ДОМ для остальных саг 

<h1> Разберем схему выполнения саги </h1>

<p>Сага работает по принцепу наблюдателя , нужен сигнал для начала работы Саги </p>
<p> Так как это middleWare Имеет доступ к store dispatch/getState </p>
<p> и к каждому запушенному obj action</p>

<p>Saga - наблюдает за каждым запушенныи action и как только запуститься нужный action , Saga сработает</p>

<b> Запуск  action </b>
<p> componentDidMount fetch_post_async </p>
<p> проходит по  middleware </p>
<p> и доходит до Saga</p>
<p> middleware - регестрирует всех Wotcher sag в приложении </p>
<p> каждая Wotcher Сага слидит за определенным action </p>
<p> action "fetchPosrAsynk" Saga - проверит всех Watcher  - какой Watcher смотрит за FATCH_POST_ASYNC</p>
<p> если нет то Сага - выходит </p>
<p> Если есть Wotcher на такой екшион </p>
<p> Вызывает Worker Saga</p>
<p> Worker - сделает рабоу (spinner-on/off fetch get/post ... ) </p>
<p> status 200?  - error - </p>
<p> Success -  Worker Saga загрузит состояние в redux </p>
<p> запустить action FILL_POST </p>


<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>










































































