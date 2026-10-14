# VK Video Mirror — Privacy Policy / Политика конфиденциальности

Effective date / Дата вступления в силу: **14 October 2026 / 14 октября 2026 года**.

Applies to / Применяется к: **VK Video Mirror 1.0.0**, Developed by **Kardanio**.

## Русский

**Разработчик.** Kardanio. Страница разработчика и контактная точка: [https://github.com/Kardanio](https://github.com/Kardanio).

**Назначение.** Расширение по нажатию на иконку включает и выключает горизонтальное отражение элементов video внутри открытого Shadow DOM на vk.com, vkvideo.ru и vkvideo.com, включая поддомены, сохраняя отдельные элементы управления.

**Локальная обработка.** Расширение обходит структуру документа и доступные открытые теневые деревья, находит элементы video, читает их вычисленный и inline CSS-масштаб и меняет только этот масштаб. В оперативной памяти страницы временно хранятся ссылки на найденные элементы и исходные CSS-значения, необходимые для восстановления. Расширение не считывает пиксели или кадры видео, аудиосодержимое, переписку, поля форм, cookies, пароли или историю браузера. Содержимое страницы не копируется в базу данных и не передаётся разработчику.

**Временное хранилище.** Разрешение storage используется для chrome.storage.session. Оно хранит внутренний идентификатор вкладки и логическое значение режима зеркала. URL, заголовок страницы, имя пользователя и данные аккаунта не сохраняются. Режим может быть записан при нажатии иконки даже на неподдерживаемой странице; доступ к её содержимому расширение не получает.

**Срок хранения и удаление.** Запись состояния удаляется при закрытии вкладки; сессионное хранилище очищается при перезапуске браузера, отключении, перезагрузке или обновлении расширения. Ссылки на элементы и CSS-значения освобождаются при выключении режима, обнаружении удаления элемента или выгрузке документа. Выключение режима также останавливает наблюдение и таймеры. Чтобы удалить состояние и завершить обработку, отключите расширение и обновите открытые страницы или закройте браузер. Удаление расширения прекращает его дальнейшую работу; уже открытые страницы при необходимости следует обновить.

**Сбор, передача и доступ разработчика.** Код расширения не отправляет сетевые запросы, не собирает данные для разработчика, не передаёт и не продаёт пользовательские данные третьим лицам. Нет рекламы, аналитики, телеметрии, отслеживания или удалённого кода. Kardanio не получает доступа к локально обработанной структуре страницы, видео или состоянию вкладок. Данные используются только на устройстве для указанной функции зеркалирования, в соответствии с принципом Limited Use Chrome Web Store.

**Сторонние сервисы.** Сайты VK, браузер, магазин расширений и GitHub работают по собственным политикам. Обычные запросы браузера для воспроизведения видео и обновления установленного расширения не являются запросами, создаваемыми кодом VK Video Mirror. Если пользователь самостоятельно открывает GitHub или отправляет информацию в обращении, её обработка регулируется также правилами выбранной платформы.

**Изменения.** При изменении фактического поведения расширения эта политика должна быть обновлена до публикации соответствующей версии.

## English

**Developer.** Kardanio. Developer page and contact point: [https://github.com/Kardanio](https://github.com/Kardanio).

**Purpose.** The extension toggles horizontal reflection of video elements inside open Shadow DOM on vk.com, vkvideo.ru and vkvideo.com, including subdomains, while leaving separate player controls in place.

**Local processing.** The extension traverses document structure and accessible open shadow trees, locates video elements, reads their computed and inline CSS scale, and changes that scale. Element references and original CSS values needed for restoration are temporarily held in page memory. It does not read video pixels or frames, audio content, messages, form fields, cookies, passwords or browsing history. Page content is not copied into a database or sent to the developer.

**Temporary storage.** The storage permission is used for chrome.storage.session. It holds an internal tab identifier and a boolean mirror setting. URLs, page titles, usernames and account data are not stored. Clicking the icon may record a setting even on an unsupported page; the extension does not gain access to that page's contents.

**Retention and deletion.** A tab's setting is removed when the tab closes. Session storage is cleared when the browser restarts or the extension is disabled, reloaded or updated. Element references and CSS values are released when mirroring is disabled, removal of an element is detected, or the document unloads. Disabling mirroring stops its observers and timers. To clear settings and stop processing, disable the extension and reload open pages, or close the browser. Uninstalling prevents further extension operation; reload existing pages if needed.

**Collection, sharing and developer access.** The extension code makes no network requests, collects no data for the developer, and does not transmit or sell user data to third parties. It contains no advertising, analytics, telemetry, tracking or remotely hosted code. Kardanio has no access to the locally processed page structure, videos or tab settings. Data is used only on the device for the stated mirroring function, consistent with the Chrome Web Store Limited Use principle.

**Third-party services.** VK websites, the browser, the extension store and GitHub operate under their own policies. Normal browser requests to play videos or update installed extensions are not requests initiated by VK Video Mirror's code. If a user independently opens GitHub or submits information in a support request, that platform's policies also apply.

**Changes.** This policy must be updated before publishing a version that changes the extension's actual data handling.
