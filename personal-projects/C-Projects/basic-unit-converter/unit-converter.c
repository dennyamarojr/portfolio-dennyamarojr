#include <stdio.h>

int main(){
    char category;
    int tempChoice;
    int currencyChoice;
    int massChoice;
    int userInputF; // User inputted Fahreinheit;
    int userInputC; // User inputted Celsius;
    int userinputUSDtoEuro; // User inputted for USD to EURO;
    int userinputUSDtoJPY; // User inputted for USD to JPY;
    int userinputUSDtoRMB; // User inputted for USD to RMB;
    int userinputUSDtoBRL; // User inputted for USD to BRL;
    int userinputOunce; // User inputted for Ounce;
    int userinputGram; // User inputted for Gram;
    int fahrenheitToCelcius; // variable that stores the converted F->C;
    int celsiusToFahrenheit; // variable that stores the converted C->F;
    float USDtoEURO ; // varaible that stores the converted USD->EURO;
    float USDtoJPY; // stores the converted USD->JPY;
    float USDtoRMB; // stores the converted USD->RMB;
    float USDtoBRL; // stores the converted USD->BRL;
    float ounceToPounds; // stores the converted Ounce->Pounds;
    float gramsToPounds; // stores the vonerted Grams->Pounds;

    printf("Welcome to Unit Converter");
    printf("Here is a list of options to choose from:\n");
    printf("Temperature(T), Currency(C),Mass(M)\n");
    printf("Please enter the letter you want to convert.\n");
    scanf("%c", &category);

    if(category == 'T'){
        printf("Welcome to Temperature Converter! \n");
        printf("Here is a list of convertions to choose from:\n");
        printf("Enter 1 for Fahrenheit to Celsius");
        printf("Enter 2 for Celsius to Fahrenheit");
        scanf("%d", &tempChoice);
        if(tempChoice == 1){
            printf("Please enter Fahrenheit degree:\n");
            scanf("%d", &userInputF);
            fahrenheitToCelsius = ((userInputF-32) * (5.0/9.0));
            printf("Celsius: %d",fahrenheitToCelsius);
        }
        else if(tempChoice == 2){
            printf("Please enter the Celsius degree:\n");
            scanf("%d",&userInputC);
            celsiusToFahrenheit = ((9.0/5.0)*userInputC + 32);
            printf("Fahrenheit: %d",celsiusToFahrenheit);
        }
        else
          printf("Please enter the a valid option.\n");
    }
    else if(category == 'C') {
        printf("Welcome to the currency converter!\n");
        printf("Here is a list of convertions to choose from:\n");
        printf("Enter 1 to USD to EUR (Euro).\n");
        printf("Enter 2 to USD to Japanese Yen (JPY).\n");
        printf("Enter 3 to USD to Chinese Yuan Renminbi (RMB).\n");
        printf("Enter 4 to USD to Brazilian Real (BRL).\n");
        scanf("%d", &currencyChoice);
        if(currencyChoice == '1'){
            printf("Please enter the USD amount:\n");
            scanf("%d",&userinputUSDtoEuro);
            USDtoEURO = userinputUSDtoEuro * 0.96;
            printf("Euro: %.2f",USDtoEURO); // %.2f = rounds the float to only 2 decimal places;
        }
        else if (currencyChoice == '2'){
            printf("Please enter the USD amount:\n");
            scanf("%d",userinputUSDtoJPY);
            USDtoJPY = userinputUSDtoJPY * 138;
            printf("JPY %.2f",USDtoJPY);
        }
        else if (currencyChoice == '3'){
            printf("Please enter the USD amount:\n");
            scanf("%d",userinputUSDtoRMB);
            USDtoRMB = userinputUSDtoRMB * 7.04;
            printf("RMB: %.2f",USDtoRMB);
        }
        else if (currencyChoice == '4'){
        printf("Please enter the USD amount:\n");
        scanf("%d",userinputUSDtoBRL);
        USDtoBRL = userinputUSDtoBRL * 5.33;
        printf("BRL: %.2f",USDtoBRL);
        }
        else
          printf("Please enter a valid option.\n");
    }
    else if(category == 'M'){
        printf("Welcome to the Mass Converter!\n");
        printf("Here is a list of convertions to choose from:\n");
        printf("Enter 1 for ounces to pounds.\n");
        printf("Enter 2 for gram to pounds.\n");
        scanf("%d",&massChoice);
        if(massChoice == '1'){
            printf("Please enter the ounce amount: \n");
            scanf("%d",&userinputOunce);
            ounceToPounds = userinputOunce * 0.0625;
            printf("Pounds: %.2f",ounceToPounds); 
        }
        else if (massChoice == '2'){
            printf("Please enter the gram amount: \n");
            scanf("%d",userinputGram);
            gramsToPounds = userinputGram * 0.00220462;
            printf("Pounds: %.2f",gramsToPounds);
        }
        else
          printf("Please enter a valid option");
    }
    return 0;
}