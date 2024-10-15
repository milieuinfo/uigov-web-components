DV breakpoints

$vl-bp-xsmall: 500px;
$vl-bp-small: 767px;
$vl-bp-medium: 1023px;
$vl-bp-large: 1600px;

$vl-bp-list: (
l: (media: "large"),
m: (media: "medium"),
s: (media: "small"),
xs: (media: "xsmall")
);

@karim ivm grid

- ik was begonnen met voor de verschillend sub-componenten van 'grid' en 'form-grid' de attributen op te lijsten en adhv de DV scss en de gegenereerde css dan een 12-column opzet met css-grid te bepalen
- om niet het warm water uit te vinden nam ik dit artikel door: https://www.lambdatest.com/blog/12-column-css-grid/ - dat bespreekt de opzet maar gaat niet over een generieke oplossing
- zoekend naar een generieke oplossing kwam ik uit bij https://erikmonjas.github.io/css-grid-12-column-layout/ met de code https://github.com/erikmonjas/css-grid-12-column-layout/blob/master/css/12-column-css-grid.css

Die laatste nam ik dan als basis, ik gebruikte de DV breakpoints en de BEM conventie om zo de bijgevoegde css te maken - moet nog gewrapped en ge-ts'ed worden.

voordelen:
- als ik de attributen overloop van de oude opzet lijkt alles ondersteund
- enkel het 'stacked' concept: meer margin (default / small / large) is er niet, maar zoals ik vanmorgen zei, misschien moeten we voor witruimte een aparte css voorzien (bvb. met 3 margin's small/medium/large) - dat zou je dan eender waar kunnen gebruiken
- er zijn meer css mogelijkheden (justify / align / items / content / self) dan voordien, afnemers kunnen dus fijner uitlijnen, maar allemaal wel binnen het default css-grid concept
- volgt gewoon de css-grid mogelijkheden + 12 col layout conventies + DV breakpoints -> de documentatie zou die 3 concepten uitleggen, afnemers kunnen zelf samenstellen
- de css is leesbaar en gestructureerd

nadelen:
- het voelt tailwind-achtig aan
- misschien te veel mogelijkheden - we zouden er kunnen schrappen -> idee is goede 'volledige' layout voorbeelden te voorzien, bij het bouwen zal ik zien of we al die 'mogelijkheden' nodig hebben
