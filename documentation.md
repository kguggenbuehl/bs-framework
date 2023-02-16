# Doku

1. [Grundsätze](#1-grundsätze)
2. [CSS-Files-Struktur](#css-files-struktur)
3. [Komponenten und ihre Modifier](##3.-Komponenten-und-ihre-Modifier)


## 1. Grundsätze
* Farben werden als HSL (Hue, Saturation, Lightness) angegeben
* Womöglich Grid oder Flex verwenden
 * Grid-Areas für Layout
* Spezifität möglichst tief halten (0 1 0). Dazu kann z.B. `:where()` verwendet werden
* (Modifier werden mit camelCase geschrieben)
* Klassen werden mit einem Prefix ausgestattet: `c-` für Komponenten, `m-` für Module, `js-` für im JS benötigte Klassen

## 2. CSS-Files-Struktur
1. settings.css - für alle Variablen, lokal, Editor
2. basics.css - helper, Fonts, lokal, Editor
3. components.css - für Komponenten, vom Master geladen
4. modules.css - GOViS-Modul-Anpassungen, vom Master geladen
5. layout.css - Layout-CSS, lokal
6. print.css - Print, lokal


## 3. Komponenten und ihre Modifier
Es gibt verschiedene Komponenten, welche universell an verschiedenen Orten eingesetzt werden können. Das CSS für deren grundsätzliche Gestaltung kommt ab dem components.css, welches direkt vom Master geladen werden kann. So kann dieses File global einfach angepasst werden. In lokalen CSS-Files können Gestaltung überschrieben werden, jedoch soll man sich auf Farben, Masse und Stärken beschränken. Grundsätzliche Logik wie display- oder position-Werte sollten nicht verändert werden.
Komponenten können mit Modifier ergänzt werden, welche überlicherweise auf alle Komponenten zugewiesen werden können.

### Komponentenliste
* Liste: `c-list`
* Grid: `c-grid`
* Flex: `c-flex`
* Card: `c-card`
* Tabelle: `c-table`
* Flex: `c-flex`
* Form: `c-form`
* Suche: `c-search`
* Hamburger: `c-hamburger`
* Akkordeons:
* Tabs
* Dropdowns
* Modals
* Bildergalerien
* Slideshows
* Navigationen
* Kalender
* Breadcrumb
* Kommentare
* Downloads

### Modifier
* `--linkList` kann für Listen, Navigationen usw. verwendet werden. Der Link wird `display: block` gesetzt, `text-decoration`und Schriftfarbe werden zurückgesetzt.
* `--linkExpanded` kann einem Containerelement mitgegeben werden, der klickbare Bereich des darin enthaltenen Links wird auf die Grösse des Containers vergrössert
* `--reset` die Liste und das Padding wird zurückgesetzt
* `--alignEnd` setzt geflexte Elemente an das Ende
* `--alignCenter` setzt geflexte Elemente in die Mitte
* `--gap` setzt den horizontalen und vertikalen Gap auf den im variables.css festgelegten Wert
* `--horizontalGap` setzt den horizontalen Gap auf den im variables.css festgelegten Wert
* `--verticalGap` setzt den vertikalen Gap auf den im variables.css festgelegten Wert
* `--cover` setzt darin liegende Medien auf `object-fit: cover`

## 4. Module
Im `module.css` werden GOViS-spezifische Gestaltunganpassungen für GOViS-Module gemacht. Dieses CSS kommt ebenfalls vom Master. Anpassungen da drin haben Einfluss für alle Kunden.

### Modulliste
* Breadcrumb: `m-breadcrumb`
* 