# Doku

1. [Grundsätze](#1-grundsätze)
2. [CSS-Files-Struktur](#css-files-struktur)
3. [Komponenten und ihre Modifier](##3.-Komponenten-und-ihre-Modifier)
4. [Aufbau einer Seite](##4.-aufbau-einer-seite)


## 1. Grundsätze
* Farben werden als HSL (Hue, Saturation, Lightness) angegeben
* Womöglich Grid oder Flex verwenden
 * Grid-Areas für Layout
* Spezifität möglichst tief halten (0 1 0). Dazu kann z.B. `:where()` verwendet werden
* (Modifier werden mit camelCase geschrieben)
* Klassen werden mit einem Prefix ausgestattet: `c` für Komponenten, `js` für im JS benötigte Klassen
* BEM (Block - Element - Modifier) wo immer möglich verwenden. Keine verschachtelten Elemente in Klassen (`nav__list__item__link`). Da gäbe es dann die Klassen `cNav__list`, `cNav__item` und `cNav__link`. 
* Eine Liste `__list` enthält grundsätzlich immer `__item` als Kindelemente.
* Typische Klassen für einen Block sind:
 * `__header` für `__title`, `__subtitle` und `__meta`
 * `__body` für `__content`, `__desc`, `__fig` usw.
 * `__footer` für `__link` usw. 
 * `__controls` für Buttons, Steuerungen
 * allenfalls `__fig` für Bilder
* Typische Elemente sind: `__title`, `__subtitle`, `__meta`, `__content`, `__desc`, `__fig`, `__img`, `__button`, `__label`, `__input`, `__control`, `__link`, `__legend` usw.

## 2. CSS-Files-Struktur
1. settings.css - für alle Variablen, lokal, Editor
2. basics.css - helper, Fonts, lokal, Editor
3. components.css - für Komponenten, vom Master geladen. Klassen, welche in .hbs gebraucht/verwendet werden, sind in diesem CSS enthalten.
4. theme.css - Komponentenanpassungen, lokal
5. layout.css - Layout-CSS, lokal
6. print.css - Print, lokal


## 3. Komponenten und ihre Modifier
Es gibt verschiedene Komponenten, welche universell an verschiedenen Orten eingesetzt werden können. Das CSS für deren grundsätzliche Gestaltung kommt ab dem components.css, welches direkt vom Master geladen werden kann. So kann dieses File global einfach angepasst werden. Im lokalen CSS-File `theme.css` kann die Gestaltung überschrieben werden, jedoch soll man sich auf Farben, Masse und Stärken beschränken. Grundsätzliche Logik wie display- oder position-Werte sollten nicht verändert werden.
Komponenten können mit Modifier ergänzt werden, welche überlicherweise auf alle Komponenten zugewiesen werden können.

### Komponentenliste
* Liste: `cList`
* Grid: `cGrid`
* Card: `cCard`
* Flex: `cFlex`
* Suche: `cSearch`
* LiveResultate: `cLiveResults`
* Tabelle: `cTable`
* Form: `cForm`
* Hamburger: `cHamburger`
* Akkordeons: `cAccordion`
* Tabs
* Button: `cButton`
* Dropdowns
* Modals
* Bildergalerien
* Slideshows
* Navigationen
* Kalender
* Breadcrumb: `cBreadcrumb`
* Kommentare
* Downloads
* FAQ

### Modifier
* `--linkList` kann für Listen, Navigationen usw. verwendet werden. Der Link wird `display: block` gesetzt, `text-decoration`und Schriftfarbe werden zurückgesetzt.
* `--linkExpanded` kann einem Containerelement mitgegeben werden, der klickbare Bereich des darin enthaltenen Links wird auf die Grösse des Containers vergrössert
* `--reset` die Liste und das Padding wird zurückgesetzt
* `--gap` setzt den horizontalen und vertikalen Gap auf den im variables.css festgelegten Wert
* `--horizontalGap` setzt den horizontalen Gap auf den im variables.css festgelegten Wert
* `--verticalGap` setzt den vertikalen Gap auf den im variables.css festgelegten Wert
* `--cover` setzt darin liegende Medien auf `object-fit: cover`

## 4. Aufbau einer Seite
* page
 * header
     * wrapper wrapper--header
         * cGrid cGrid--header
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component
 * content
     * wrapper wrapper--content
         * cGrid cGrid--content
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component
 * footer
     * wrapper wrapper--footer
         * cGrid cGrid--footer
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component
             * cGrid__item
                 * c-component