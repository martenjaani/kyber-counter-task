# Frontend ülesande lahendus
Autor: Marten Mathias Jaani

Siin on minu lahendus **Click Counter Test Task** ülesandele, allpool on instruktsioonid käivitamiseks nii lokaalselt kui ka Docker konteineri kaudu

Lahendus kasutab Svelte raamistikku ja Vite serverit

### Instruktsioonid käivitamiseks lokaalselt
(vaja on node.js ja yarn/npm (sel juhul käskudes kasutada ```yarn``` asemel ```npm```)

1. Paki kaust lahti
2. Käivita backend
```cmd
yarn install
yarn dev
```
3. Jooksuta testid uues aknas

Windows cmd
```cmd
setx PAGE_URL "http://localhost:3000"
yarn test
```
Linux
```cmd
PAGE_URL="http://localhost:3000" yarn test
```



