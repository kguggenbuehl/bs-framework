# bs-framework
## Zum Besprechen
* Wieviel Gestaltung, zB. m-breadcrumb
* Wieviele Gestaltungs-Optionen und wo werden diese mitgegeben?
* Was übernehmen von altem Framework?
* Tabelle mit Schatten wenn Scrollbalken per JS
* HSL-Farben?
* Darkmode?
* CamelCase :-) 
* [class*=…] oder einfach --modifier

* Bilder weiterhin gefloatet oder komplett neuer Ansatz?
* Live validation forms
* zu theoretisch, praktische Ausgabe, Framework-Installation? 

## Grid
* grid-raster. ausgehend von container, ausgehend von item, grössen per breakpoint, immer area …

### Anwendungsbereich
* Grundsätzliches Layout (Header, Footer, Main)
* Bildergalerien
* Listen (News, Navigation)
* Cards


###Anforderungen an Grid
* Spalten immer gleich breit -> clamp
* ungleiche Spaltenverteilung -> Children müssen Klassen erhalten, nicht Container
* ändern bei breakpoints
* mehrzeilig




 * Vorteile vom Container ausgehend:
  * 


grid__item--xxl (1) > span 12 ,span 12, span 12
grid__item--xl (2) > span 12 ,span 12, span 6
grid__item--lg (3) > span 12 ,span 12, span 4
grid__item--md (4) > span 12 ,span 6, span 3
grid__item--sm (6) > span 6 ,span 4, span 2
grid__item--xs (12) > span 3 ,span 2, span 1




grid__item--xxl--md--xs