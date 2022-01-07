import { IRecipe } from '.';

/*

    - Obrok za jake kosti                  |  Page: 40    
    - Detoks obrok                         |  Page: 41    
    - D obrok                              |  Page: 41    
    - Rajski obrok u čaši                  |  Page: 43    
    - Visoko-proteinski šejk               |  Page: 47    
  
*/

export const shakeData: IRecipe[] = [
  // -----------------------------------------------
  // Obrok za jake kosti
  // -----------------------------------------------
  {
    title: 'Obrok za jake kosti',
    description: `Sastojci:
- 1 banana
- 2 kruške
- 1 breskva
- 4 supene kašike mlevenog susama
- 4 urme
- 500 ml vode`,
    page: 40,
    starred: false,
  },
  // -----------------------------------------------
  // Detoks obrok
  // -----------------------------------------------
  {
    title: 'Detoks obrok',
    description: `Sastojci:
- 1 banana
- 1 mango
- šaka iseckanog ananasa
- 4 supene kašike mlevenog lana
- 4 suve kajsije
- 500 ml vode`,
    page: 41,
    starred: false,
  },
  // -----------------------------------------------
  // D obrok
  // -----------------------------------------------
  {
    title: 'D obrok',
    description: `Sastojci:
- 1 banana
- 2 kivija
- 1 pomorandža
- sok od jednog limuna
- 50 g badema
- 4 urme
- 500 ml vode`,
    page: 41,
    starred: false,
  },
  // -----------------------------------------------
  // Rajski obrok u čaši
  // -----------------------------------------------
  {
    title: 'Rajski obrok u čaši',
    description: `Sastojci:
- 2 jabuke
- 1 pomorandža
- 250 ml soka od grožđa
- 4 supene kašike namočenog ovsa
- 250 ml čaja od sveže nane
- 4 supene kašike javorovog sirupa`,
    page: 43,
    starred: false,
  },
  // -----------------------------------------------
  // Visoko-proteinski šejk
  // -----------------------------------------------
  {
    title: 'Visoko-proteinski šejk',
    description: `Sastojci:
- 2 supene kašike sirovog suncokreta
- 2 supene kašike badema
- 2 supene kašike oraha
- 2 supene kašike mlevenog lanenog semena
- 4 šolje vode
- 1 šolja jagoda (ili malina, kupina)
- 2 zamrznute sveže banane
- 2 supene kašike meda`,
    page: 47,
    starred: false,
  },
];
