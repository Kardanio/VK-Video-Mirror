# VK Video Mirror

**Developed by Kardanio** · Version **1.0.0** · Manifest V3

Расширение для горизонтального отражения видео VK без изменения кнопок и элементов управления плеером.

[![Latest Release](https://img.shields.io/github/v/release/Kardanio/VK-Video-Mirror?label=Download&color=brightgreen)](https://github.com/Kardanio/VK-Video-Mirror/releases/latest)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)


**[Скачать VK Video Mirror](https://github.com/Kardanio/VK-Video-Mirror/releases/latest)** · 
**[Сообщить об ошибке](https://github.com/Kardanio/VK-Video-Mirror/issues)**

### Быстрая установка

1. Скачайте `VK-Video-Mirror-1.0.0-store.zip` из [последнего релиза](https://github.com/Kardanio/VK-Video-Mirror/releases/latest).
2. Распакуйте архив в отдельную папку.
3. Откройте страницу расширений браузера (`chrome://extensions`, `opera://extensions` или `browser://extensions`).
4. Включите режим разработчика.
5. Выберите «Загрузить распакованное расширение» и укажите папку с `manifest.json`.
6. Откройте VK Video и нажмите иконку расширения, чтобы включить или выключить отражение.

**Конфиденциальность:** расширение не собирает личные данные и не использует аналитику. [Политика конфиденциальности](https://kardanio.github.io/VK-Video-Mirror/privacy-policy.html).

**Публикация:** версия 1.0.0 доступна на GitHub. Заявка в Opera Add-ons находится на модерации.

Автор и бренд разработчика: **Kardanio**. GitHub: [github.com/Kardanio](https://github.com/Kardanio).

VK Video Mirror включает и выключает горизонтальное отражение видео на сайтах VK по нажатию на иконку расширения. Отражаются только элементы `video` в открытом Shadow DOM. Отдельные кнопки, таймлайн и слои плеера не меняются.

Это независимый проект Kardanio, не связанный с VK и не одобренный VK. Обозначение VK используется для описания совместимости.

## Файлы комплекта

- `extension/` — готовая папка для локальной установки. В ней только manifest, два исходных JS и используемые иконки.
- `VK-Video-Mirror-1.0.0-store.zip` — готовый архив расширения, доступный в [GitHub Releases](https://github.com/Kardanio/VK-Video-Mirror/releases/latest). `manifest.json` расположен в корне архива.
- `STORE-LISTING-RU.md`, `STORE-LISTING-EN.md` — короткие и полные описания.
- `PRIVACY.md`, `privacy-policy.html` — политика конфиденциальности на русском и английском; HTML можно разместить на публичном сайте.
- `PUBLISHING.md` — порядок подачи, обоснования разрешений и заметки о правилах магазинов.
- `VERIFICATION.md` — результаты проверок и их границы.
- `store-assets/` — иконка, промоматериал и демонстрационные снимки.

`package.json` не используется: зависимостей и сборки у расширения нет. Информация об авторе находится в этом README, описании manifest, политике и материалах карточки. Chrome игнорирует устаревшее поле manifest `author`; имя издателя **Kardanio** нужно установить в кабинете магазина.

## Локальная установка

1. Скачайте архив из [GitHub Releases](https://github.com/Kardanio/VK-Video-Mirror/releases/latest) и распакуйте его в постоянную папку либо скачайте исходный код репозитория.
2. Откройте `chrome://extensions` в Chrome. В Яндекс Браузере используйте `browser://extensions`, в Opera — `opera://extensions`.
3. Включите «Режим разработчика» и нажмите «Загрузить распакованное расширение» / Load unpacked.
4. Выберите папку, непосредственно содержащую `manifest.json`. Если скачали исходный код репозитория, выберите папку `extension/`.
5. Закрепите иконку VK Video Mirror и обновите уже открытые страницы VK.


## Использование и ограничения

Откройте видео на `vk.com`, `vkvideo.ru` или `vkvideo.com`, включая поддомены. Нажмите иконку: **ON** означает включённый режим для текущей вкладки. Повторное нажатие выключает отражение и восстанавливает исходный inline-масштаб видео.

Состояние отдельно для каждой вкладки, сохраняется при SPA-переходах и обновлении страницы. Закрытие вкладки, перезапуск браузера или перезагрузка/отключение/обновление расширения сбрасывают его. После перезагрузки расширения обновите открытые страницы.

Поддерживаются несколько видео, вложенные открытые теневые деревья и динамическая загрузка плеера. Новый Shadow DOM на существующем элементе обнаруживается обычно в течение секунды; фоновые таймеры браузер может замедлять. ON показывает режим вкладки, а не факт обнаружения видео.

Обычные `video` в основном DOM, в том числе переданные из него через slot, и закрытый Shadow DOM исключены. Во фреймах расширение работает только при совпадении адреса или инициатора с разрешёнными доменами. Отражаются все подходящие `video`, включая несколько плееров на странице. Текст, встроенный в изображение видео, отражается вместе с изображением; отдельные DOM-слои субтитров остаются без изменений. Будущие изменения устройства плеера VK могут потребовать обновления.

## Разрешения и конфиденциальность

Единственное API-разрешение — `storage`, для временной пары «ID вкладки → включено/выключено» в `chrome.storage.session`. Доступ content script ограничен тремя семействами доменов VK. Расширение локально обходит DOM и читает/меняет CSS-масштаб подходящих видео; для восстановления хранит ссылки на элементы и их прежние CSS-значения в памяти страницы.

Нет рекламы, аналитики, сетевых запросов со стороны кода расширения, удалённого кода, сбора или передачи пользовательских данных разработчику. Расширение не читает кадры видео, сообщения, формы, cookies и историю браузера. Подробности: [политика конфиденциальности](PRIVACY.md).

## English

**VK Video Mirror — Developed by Kardanio.** Click its toolbar icon to mirror videos horizontally on supported VK domains; click again to restore them. Only `video` elements inside open shadow trees are changed. Player controls remain in place. Each tab has independent session state, including across SPA navigation and reloads. Multiple videos, nested open shadow roots and late player loading are supported. Closed shadow roots and light-DOM videos are excluded.

To install locally, open your browser's extensions page, enable Developer mode, choose Load unpacked, and select the `extension` folder. Refresh existing VK pages. No build step or package manager is required. See the English listing and bilingual privacy policy for details.

© 2026 Kardanio.
