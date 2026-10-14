# Проверка VK Video Mirror 1.0.0 — Kardanio

Дата: 14 октября 2026 года.

## Неизменность логики

Оба файла совпадают с исходной рабочей версией побайтно (SHA-256):

- background.js: `82d87f61dcb8aec200925362b09f93d81de81bdd027280ce028839c4a424c879`
- content.js: `95e4bd308f72e27a02721eda68a1ff74665f9596f8714e4f23dab60130cc717a`

Не изменены permissions, content_scripts (включая домены, фреймы и run_at), background и minimum_chrome_version. Изменены только name, description, начальная подсказка иконки и ссылки на иконки. При включении/выключении используются прежние русские подсказки из исходного background.js.

## Регрессионные проверки

1. PASS — Manifest V3, file references and JavaScript syntax
2. PASS — Disabled initially
3. PASS — Multiple and nested open-shadow videos mirrored; light DOM, closed roots, buttons and hosts untouched; original transform preserved
4. PASS — Dynamic video insertion and late attachShadow on an existing host
5. PASS — Player scale changes handled; disabling restores values and !important priority
6. PASS — Repeated toggles do not accumulate reflections
7. PASS — SPA player replacement; detached videos restored and released
8. PASS — Full cleanup on disable
9. PASS — Rapid clicks serialized, independent tab state and broadcasts
10. PASS — State survives service-worker restart; late frames get current state
11. PASS — Closed-tab state cleanup

DOM/CSS проверены в настоящем headless Chromium с тестовым Chrome API. Логика service worker проверена отдельно с имитацией API и повторным созданием worker.

## Установка и работа с настоящими API расширения

- **Microsoft Edge 155.0.4283.45**: папка extension загружена как unpacked extension в отдельный headless-профиль; настоящий service worker запущен.
- **Opera 131.0.5877.116, Chromium 147.0.7727.138**: та же папка установлена в отдельный headless-профиль; настоящий service worker запущен.
- В обоих браузерах через браузерный DevTools Protocol вызвано настоящее событие action. Первая активация отражает video и включает badge ON; вторая восстанавливает исходный масштаб.
- Кнопки тестового плеера не изменены. Динамический открытый Shadow DOM, SPA-переход и перезагрузка страницы с восстановлением включённого режима прошли.
- Нет ошибок страницы в этих сценариях.

Тестовая страница с локально созданным видеопотоком выдавалась тестовым маршрутизатором под адресом vkvideo.ru; содержимое живого VK не загружалось. Снимки демонстрации явно обозначают локальный тестовый плеер. Нажатие мышью на видимую панель браузера не выполнялось: проверено именно настоящее событие action через протокол браузера.

## Manifest, иконки и пакет

JSON и синтаксис JS корректны. Описание manifest: 103/132 символов. Короткие описания RU и EN укладываются в 132 символа. Иконки 16, 32, 48 и 128 px проверены: PNG, alpha, без interlace. Все пути manifest существуют, все файлы extension используются. Единственное API-разрешение — storage. Нет сетевых вызовов, удалённого кода, рекламы, аналитики и новых механизмов сбора данных.

## Границы проверки

Google Chrome в этой среде не установлен; проверка Chromium выполнена в Edge и Opera. Яндекс Браузер, macOS, Linux, живой текущий плеер VK и кабинеты магазинов не проверялись. История опубликованных версий неизвестна. Политика подготовлена, но ещё не размещена по публичному URL. Принятие имени VK Video Mirror, пакета и графики определяют модераторы магазинов.
