import promptSync from "prompt-sync";




const prompt = promptSync();
let itens: string[] = [];
let i: number = 0;
let j: number;
let option: string;
let material_name: string;
let remove: string;




do
{
     console.log(`\n\n===================================\n`);
     console.log(`|| MENU DE OPÇÕES - GERENCIAMENTO||\n`);
     console.log(`===================================\n`);
     console.log(`|| 1. Adicionar Item             ||\n`);
     console.log(`===================================\n`);
     console.log(`|| 2. Listar itens               ||\n`);
     console.log(`===================================\n`);
     console.log(`|| 3. Remover item               ||\n`);
     console.log(`===================================\n`);
     console.log(`|| 0. Sair                       ||\n`);
     console.log(`=====================================`);
     option = prompt("\nInsira uma opção: ");


     switch(option)
     {
        case '1':
            {
                material_name = prompt("Insira um material: ");
                itens[i] = material_name;
                i++;
                break;
            }


        case '2':
            {
                for(j = 0; j < i; j++)
                {
                    console.log(`Item ${j+1}: ${itens[j]}`);
                }
                break;
            }


        case '3':
            {
                remove = prompt("Digite o material que deseja remover: ");
                for(j = 0; j <= i; j++)
                {
                    if(remove == itens[j])
                    {
                        itens.splice(j, 1);
                    }
                }
                break;
            }
     }
 
}while(option != '0');


