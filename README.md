# back_n_front

Этот проект создан, чтобы показать один из вариантов того, как можно собрать фронт и бэк в единый артефакт.

# Get started

## react-frontend

- `npm install` - для установки зависимостей
- `npm run start` - для запуска в dev режиме
- `npm run build` - для сборки приложения

## frontend-vue

- `npm install` - для установки зависимостей
- `npm run serve` - для запуска в dev режиме
- `npm run build` - для сборки приложения

## backend-node

- `node index.js` - для запуска

Чтобы собранное фронтовое приложение было доступно с сервера - положите артефакты сборки в директорию `assets` (либо любую другую - это задаётся переменной `staticDir` в `index.js`)


# Задания

## №1 Проверить что это работает

Соберите любое фронтовое приложение (доступное здесь, либо напишите своё) и подложите на сервер. При этом убедитесь, что вы можете получать статику, а также запросы на API выполняются корректно

## №2 Автоматизация

Напишите скрипт, который сам подкладывает артефакты сборки фронта на сервер

## №3 Докеризация

Сделайте докер образ вашего бэкэнда с фронтовым приложением.
Попробуйте использовать АПИ бэкенда для новой версии фронта, которую вы разрабатываете локально.

## №4 Отдельный сервер со статикой

Попробуйте сделать отдельный сервер, который будет заниматься только отдачей статики (в качестве прокси или как отдельный сервер).
* Если выполнено задание №3, попробуйде сделать это задание с помощью `docker compose` (или с помощью `minikube`)

