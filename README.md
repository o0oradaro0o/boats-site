# BoatsSite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## AWS API

URL:
https://grdxgi2qm1.execute-api.us-east-1.amazonaws.com/battleships

ask radar for the api key

need to pass the header x-api-key with that value to auth no IP whitelist

call /describe to see the table schema

and then you can make RESTful calls by going /matchID/playerID

query string parameters let you filter by any field in the document

subfields are referenced with dot notation, e.g. Field.SubField

projection is done using the include key

multiple fields separated by commas, sorting works the same way

put a - in front of a field to sort in the opposite direction (but sorts currently take waaaay too long)

exclude is reverse projection eliminating specific fields from the response object

you can skip records with skip=INT and limit result size with take=INT

the response object you get back will include a Contents key containing a list of your responses

you'll also get a Table that should always be battleships and a Query that describes the query it ran against the DB to fetch

if you receive a LastKey object that means your results are paginated and you can use it to retrieve the next page either by including it in a POST body or in query string parameters as lastKey=KEY:VALUE,KEY:VALUE

alternatively you can use the special query string continue=true to fetch all results but beware this may cause timeout issues all requests time out after 30 seconds and i cannot increase that


for single-game data send calls to the same endpoint
but use battleships/battleships_game
instead of battleships/battleships
everything else is the same
i sorted the data there by negative matchID
presuming that matchID is continually increasing that means you'll return data from newest to oldest
