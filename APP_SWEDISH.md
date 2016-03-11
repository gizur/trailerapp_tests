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