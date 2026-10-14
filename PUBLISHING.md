# Публикация VK Video Mirror 1.0.0

Подготовлено 14 октября 2026 года. Автор и бренд: **Kardanio**. Никакие материалы не загружены в аккаунты магазинов, публичная политика ещё не размещена.

## Что загружать

В Chrome Web Store загрузите `VK-Video-Mirror-1.0.0-store.zip`. В нём manifest находится в корне, а все остальные файлы используются расширением. В Opera Add-ons начните подачу через кабинет разработчика с этим пакетом, если форма принимает ZIP. Если текущая форма требует CRX/NEX, создайте подписанный пакет из папки `extension` через «Упаковать расширение» в Opera; не переименовывайте обычный ZIP в CRX и не загружайте созданный приватный PEM-ключ. Формат загрузки Opera в авторизованном кабинете не проверялся.

Полный ZIP комплекта предназначен для вас, а не для загрузки как пакет расширения: он содержит документацию и материалы карточки.

## Поля карточки

- Название: **VK Video Mirror**.
- Издатель / разработчик: **Kardanio**; установите это отображаемое имя в соответствующем кабинете. Manifest не задаёт проверенное имя издателя.
- Версия: **1.0.0**, сохранена из исходной версии. Подтверждения уже опубликованной версии нет; история в ваших кабинетах недоступна. Если 1.0.0 уже загружена/опубликована для этого товара и повторная загрузка запрещена, увеличьте версию до подачи нового пакета.
- Короткое и полное описание: скопируйте из `STORE-LISTING-RU.md` и `STORE-LISTING-EN.md`; везде указано **Developed by Kardanio**.
- Предлагаемая категория: Entertainment / Развлечения.
- GitHub разработчика: https://github.com/Kardanio. Это профиль разработчика, а не выдуманный URL репозитория или страницы поддержки конкретного расширения.
- Политика: разместите `privacy-policy.html` на публично доступном HTTPS-адресе и укажите фактический адрес в кабинете. Не вводите локальный путь или несуществующий URL. GitHub Pages подходит после вашей публикации; адрес заранее не назначен.
- В Opera выберите желаемую лицензию распространения в кабинете. Этот комплект не назначает лицензию от вашего имени.

## Обоснования разрешений — готовый текст на английском

**Single purpose:** Toggle horizontal mirroring of video elements inside open Shadow DOM on supported VK domains while keeping separate player controls unchanged.

**storage:** Stores only a temporary per-tab boolean mirror setting in chrome.storage.session, keyed by the browser's internal tab ID. This preserves the setting across reloads and SPA navigation and supplies it to late-loading frames. No browsing history, URLs or account information is stored or transmitted.

**Website access / content script matches:** Access to vk.com, vkvideo.ru and vkvideo.com and their subdomains is required to locate video elements inside open shadow trees and apply or restore their CSS scale. Domain-wide matching supports changing SPA routes and embedded VK player frames. all_frames and match_origin_as_fallback cover matching embedded and related-origin frames. No access to all websites is requested.

**Remote code:** None. Both scripts are included as readable source. The extension has no external dependencies or network request code.

**Data handling:** No user data is sent off-device or collected by Kardanio. Website DOM structure and video CSS are processed locally for mirroring; temporary element references and original CSS values are kept in page memory. chrome.storage.session holds only internal tab IDs and mirror settings. No video frames, messages, form contents, cookies or browsing history are read.

В разделе Privacy practices не приравнивайте «нет передачи данных» к «нет никакой локальной обработки». Если форма спрашивает об использовании website content, укажите локальное использование структуры страницы и CSS для единственной функции, как в политике. Не отмечайте отсутствие любого использования данных вопреки этой локальной обработке. Контакты, платежи, здоровье, пароли, местоположение, переписка и история браузера расширением не собираются. Подтвердите Limited Use с учётом фактического поведения; данные не продаются и не используются для рекламы, кредитных решений или посторонних целей.

## Графика

- `extension/icons/icon-16.png`, `icon-32.png`, `icon-48.png`, `icon-128.png` — согласованные PNG с alpha, без interlace.
- `store-assets/icon-128.png` — иконка карточки; рисунок примерно 96×96 с прозрачными полями 16 px.
- `store-assets/promo-440x280.png` — малый промоматериал Chrome Web Store.
- `store-assets/chrome-demo-*-1280x800.png` — снимки реальной работы установленного расширения на локальном тестовом плеере. Они явно помечены как демонстрация, а не интерфейс VK.
- `store-assets/opera-demo-*-800x500.png` — уменьшенные копии той же демонстрации для размеров Opera. Это не снимки интерфейса Opera.

Перед финальной отправкой рекомендуется добавить снимок текущего живого плеера VK с видимой иконкой расширения в браузере, используя собственное видео или материал, на который у вас есть права. Не выдавайте тестовую демонстрацию за живой интерфейс VK. Chrome требует как минимум один снимок; официальный размер 1280×800 или 640×400. В руководстве Opera указаны предпочтительные 612×408 и максимальные 800×600.

## Проверка правил и остающиеся шаги

Manifest V3 корректен, описание короче 132 символов, ключи и ссылки на файлы проверены. Единственное API-разрешение — storage; избыточные tabs, scripting, cookies, webRequest и all_urls не запрошены. Нет рекламы, аналитики, удалённого кода или неиспользуемых файлов в пакете магазина. Контент-скрипты имеют только прежние три семейства доменов; HTTP/HTTPS и область маршрутов сохранены ради неизменности рабочего поведения. Оба JS-файла побайтно совпадают с исходной версией.

Chrome игнорирует author с февраля 2024 года, поэтому неиспользуемый ключ не добавлен. Opera developer и minimum_opera_version из старого руководства Manifest V2 не добавлены в общий пакет MV3. Реальная загрузка и переключение в Opera прошли.

У Opera есть требование, чтобы название не создавало впечатление связи с чужой компанией. Название **VK Video Mirror** сохранено по вашему указанию; независимый статус указан в описаниях, логотип VK не использован. Это снижает риск путаницы, но не гарантирует принятия названия. Если модератор потребует переименование, вариант для согласования: **Video Mirror for VK**. До такого требования название не изменено.

Чтобы отправить на модерацию, остаётся: проверить историю версии в кабинетах, настроить имя издателя Kardanio и контактные сведения, опубликовать политику по HTTPS, заполнить карточки/Privacy practices, выбрать лицензию Opera и загрузить материалы. Адрес email не выдуман. Финальное решение о принятии и требования авторизованной формы находятся у магазинов.

## Проверенные официальные источники

- [Подготовка и структура ZIP Chrome](https://developer.chrome.com/docs/webstore/prepare)
- [Графика Chrome Web Store](https://developer.chrome.com/docs/webstore/images)
- [Поле author](https://developer.chrome.com/docs/extensions/reference/manifest/author)
- [Локальная обработка данных и разрешения Chrome](https://developer.chrome.com/docs/webstore/program-policies/user-data-faq)
- [Критерии Opera Add-ons](https://help.opera.com/en/extensions/acceptance-criteria/)
- [Руководство публикации Opera](https://help.opera.com/en/extensions/publishing-guidelines/)

Часть справки Opera описывает старые API и Manifest V2. Это не основание переводить расширение с MV3 на V2; техническая совместимость проверена на установленной современной Opera. Проверка не заменяет модерацию и тесты всех платформ.
