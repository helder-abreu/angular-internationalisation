This project adds internationalization to an Angular application, using Ngx Translate library.
The puporse is to explore the limitations of Ngx Translate when using lazy loaded modules and Angular Material dialogs.

# CONSIDERATIONS
With Ngx Translate we can use one ore multiple JSON files to manage translations. JSON files are easy to maintain and make it easier to visualize the (hierarchy of) translation keys. 
It is possible to load a list of translation files in each module, even lazy loaded ones. For instance, in this application the Settings JSON file is loaded simultaneously with the Settings module, which is a lazy module.
Regarding Angular Material dialogs, and despite we're injecting a regular component declared in its own module with its own imported translation file, translations don't work. This is probably due to the fact that Angular Material dialogs are added to the application body, but outside the application's root element. 

# PROS
* Ability to instantly translate the entire application
* JSON files are easy to maintain and organize
* Reusability of translation keys
* Possibility to divide and lazy load translation files

# CONS
* TranslationModule import in every module + TranslationService injection in every component with translations
* Not working in components rendered in a cdk-overlay-container, which forces to import the respective translations in the AppModule
* Heavy performance impact