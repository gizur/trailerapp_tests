## Scenario 1 - Skapa skaderapport utan skada

| test | expected result |
|------|-----------------|
| Chaufför skriver in sin mailadress samt lösenord och trycker sedan på knappen ""Spara"". | Koden som användaren erhållit från Tågstyrningen skrivs även den in i fältet för Gizur Saas Konto."	Användaren blir inloggad i appen och skärmbild 1 visas.|
| Välj ""Coop Trailer""" |	"Coop Trailer" visas som vald trailer |
| Välj en specifik trailer." |	Valt trailer id visas. |
| Välj en geografisk plats." |	Vald geografisk plats visas. |
| Välj om trailern är plomberad." |	Valet "ja" eller "nej" visas.|
| Skicka in skaderapport utan att registrera skada." |	Ny skärmbild visas med information om att skaderapport är slutförd. |


## Scenario 2 - Negativt testfall - Skicka in testrapport utan vald plombering

| test | expected result |
|------|-----------------|
| Gör inget val för ""Vald plombering""" ||	
| Skicka in skaderapport." |	Felmeddelande visas om att val för plombering måste göras. |


## Scenario 3 - Rapportera 1 skada med 1 bild

| test | expected result |
|------|-----------------|
| Välj rapportera ny skada." |	Skärmbild 2 visas.	I skärmbild 4. |
| Under ""typ av skada"". Välj ""Dörrar""" | Dörr visas i drop down som vald skada	I skärmbild 4. |
| Under ""position""	 välj ""Höger""." |	Höger visas i drop down som vald skada	I skärmbild 4. |
| Välj ""Lägg till bild""" |	Kamera visas och det går att ta bild på skada.	I kameraläge. Följ instruktioner för att ta bild.	Bild läggs till i skaderapport. |
| Under ""Orsakade du skadan"". Välj Ja." |	Ja blir valt.	I skärmbild 4.	|
| Spara registrerad skada." |	Skärmbild 5 visas.	I skärmbild 5.	|
| Skicka in skaderapport" |	Popup visar att skaderapport skickas in.	I popup.	|
| Klicka på Ok." |	Skärmbild 1 visas.		|


## Scenario 4 -	Rapportera 1 skada med 3 bilder

| test | expected result |
|------|-----------------|
| Registrera en skada under ""typ av skada"" och ""position"""	||
| Välj ""Lägg till bild""" |	Kamera visas och det går att ta bild på skada.|
| Välj ""Lägg till bild"" igen." |	Kamera visas och det går att ta bild på skada. |
| Välj ""Lägg till bild"" igen." |	Kamera visas och det går att ta bild på skada. |
| Välj ""Lägg till bild"" igen." |	Ska inte fungera då max-antalet bilder är 4. Felmeddelande ska visas. |
| Under ""Orsakade du skadan"". Välj Nej." |	Nej blir valt. |
| Skicka in skaderapport" |	Popup visar att skaderapport skickas in. |
| Klicka på Ok." |	Skärmbild 1 visas. |


## Sceario 5 - Skapa skaderapport med 3 rapporterade skador

| test | expected result |
|------|-----------------|
| Välj rapportera ny skada." |	Skärmbild 2 visas.	I skärmbild 4.|
| Under ""typ av skada"". Välj ""Tak""" |	Tak visas i drop down som vald skada	I skärmbild 4. |
| Under ""position""	 välj ""N/A""." |	N/A visas i drop down som vald skada |
| Ta bild av skada." |	Bild visas i miniatyr.	I skärmbild 4. |
| Under ""Orsakade du skadan"". Välj Ja." |	Ja blir valt.	I skärmbild 4. |
| Spara registrerad skada." |	Skärmbild 5 visas.	I skärmbild 5. |
| Tryck på ""Lägg till flera skador""" |	Skärmbild 4 visas.	Upprepa skaderegistrering med ytterligare 2 skador. |
| Se att antalet skador i nedre ""Bläddrings-widget"" visar 1/3." |		I skärmbild 5. |
| Bläddra bland de nyrapporterade skadorna." |	En skada visas i taget och en text som beskriver skadan visas.	I skärmbild 5. |
| Skicka in skaderapport" |	Popup visar att skaderapport skickas in.	I popup. |
| Klicka på Ok." |	Skärmbild 1 visas.	|


## Scenario 6 - Se tidigare skador

| test | expected result |
|------|-----------------|
| Välj trailerID som du vet har tidigare rapporterade skador." |		I skärmbild 1.	|
| Vänta tills alla skador har laddats in." |	Ett popup-meddelande visas när alla skador har laddats in.	I skärmbild 1.	|
| Bläddra bland tidigare skador." |	Säkerställ att samtliga skador syns i bläddrings-widget	I skärmbild 1.	|
| Tryck på en skada i bläddringswidget." |	Skärmbild 2 ska visas med en bild av skadan.	I skärmbild 2.	|
| Tryck på ""Tillbaka""" |	Skärmbild 1 visas.	I skärmbild 1.	|
| Rapportera en ny skada och välj om trailer är plomberad." |	Skärmbild 4 visas.	I skärmbild 4.	|
| Rapportera valfri skada och tryck spara." |	Skärmbild 5 visas.	I skärmbild 5.	|
| Bläddra bland tidigare skador i bläddringswidget." |	Säkerställ att samtliga skador syns i bläddrings-widget	I skärmbild 5.	|
| Tryck på en tidigare rapporterad skada i bläddringswidget." |	Skärmbild 2 ska visas med en bild av skadan.	I skärmbild 2.	|
| Tryck på ""Tillbaka""" |	Skärmbild 5 visas.	I skärmbild 5.	|
| Tryck på den nyupplagda skadan i bläddringswidget för nyfunna skador." |	Skärmbild 4 visas	I skärmbild 4.	|
| Ta bort registrerad skada genom att trycka på ""Radera""" |	Skärmbild 5 visas	Tryck på skicka skaderapport	Popup visar att skaderapport skickas in.|
| Klicka på Ok." |	Skärmbild 1 visas.		|


## Scanrio 7 - Kontakt och kontaktuppgifter

| test | expected result |
|------|-----------------|
| Tryck på "Kontakt" i menyraden. |	Skärmbild 6 visas med kontaktuppgifter. |
| Tryck på telefonnumret |	Telefonen växlar till telefonläge och telefonnummer är inlagt i telefonen. |
| Avbryt telefonsamtalet och öppna appen igen. |	Skärmbild 6 visas fortfarande. |
| Tryck på mail-adressen |	Telefonen växlar till mail-programmet och mail-adress anges i till-raden. |


## Scenario 8 -	Avbryt skaderapportering

| test | expected result |
|------|-----------------|
| Tryck på "Besiktning" i menyraden	Meddelande visas som frågar om användaren vill avbryta pågående rapportering ||
| Tryck Ja |	Skärmbild 1 visas med en blank skaderapport |


## 9 - Följ upp registrerad skada i portal

| test | expected result |
|------|-----------------|
| Logga in på portal med angivna användarnamn och lösenord |	Inloggad i portal |
| Filtrera på "damaged" för att få upp de trailers som är skadade. |	Samtliga trailers som har en skada visas. |
| Filtera på en specifik trailer som har skaderapporter registrerade. |	Skador för den trailern visas |
| Välj en rapporterad skada som har bild registrerad. |	Detaljer för rapporterad skada visas. |
| Klicka på en bild för att förstora bild |	Bild förstoras och visas i separat fönster. |
| Ändra "Damage status" till under utredning och lägg en kommentar i fältet "Anteckningar" |	Status uppdateras. |
| Klicka på "skicka" och gå tillbaka till supportärende lista. |	Damage status är uppdaterad i listan för det ärende som ändrades. |
| Gå tillbaka till samma ärende. |	Ärendet visas i detalj. |
| Ändra "Damage status" till "Ärende Stängt" och klicka på "Stäng ärende".  Gå tillbaka till "Supportärende lista" |	Ärende har status "Ärende stängt" |
| Öppna appen. ||
| Se tidigare skador för den trailer som skadan togs bort ifrån. |	Skada ska inte finnas. |




