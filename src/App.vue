<script setup>
import { ref, onMounted } from 'vue';

const suodatuksessa = ref(false);

function switchSuodata(e) {
  e.preventDefault();
  console.log(suodatuksessa.value);
  suodatuksessa.value = !suodatuksessa.value;
}

onMounted(() => {
  console.log(`Alkuperäinen suodatuksessa on ${suodatuksessa.value}.`)
})

</script>

<template>
  <meta charset="UTF-8">
    <h1>Laske, kuinka täytät ravitsemussuositukset halvimmalla!</h1>
    Laskuri perustuu:
    <ul>
      <li>50 ruoka-aineen <a href="https://fineli.fi/fineli/fi/index">ravintoarvoihin</a>,</li>
      <li>niiden keskimääräisiin <a href="https://www.s-kaupat.fi/">hintoihin Prismoissa</a>,</li>
      <li>valtion ravitsemusneuvottelukunnan <a href="">suosituksiin</a> vitamiinien, kivennäisaineiden, proteiinien ja rasvojen saannista ja</li>
      <li><a href="https://en.wikipedia.org/wiki/Linear_programming">lineaariseen optimointiin</a>.</li>
    </ul>
    Syötä tietosi:
    <form>
      <fieldset>
        <label>Ikä:
          <select>
            <option>2-3</option>
            <option>4-6</option>
            <option>7-10</option>
            <option>11-14</option>
            <option>15-17</option>
            <option>18-24</option>
            <option>25-50</option>
            <option>51-69</option>
            <option>70-74</option>
            <option>>75</option>
          </select>
        </label>
        <label> Sukupuoli: 
          <select>
            <option>Mies</option>
            <option>Nainen</option>
          </select>
        </label>
        <label> Energiantarve (kcal/päivä): <input type="number"></label>
      </fieldset>
      <fieldset>
        <label><input type="checkbox">Keliakia</label>
        <label><input type="checkbox">Laktoosi-intoleranssi</label>
        <label><input type="checkbox">Vegetaristi</label>
        <label><input type="checkbox">Vegaani</label>
      </fieldset>
      <button @click="switchSuodata">{{ suodatuksessa ? 'Älä suodatakaan' : 'Suodata ruokia manuaalisesti' }}</button>
    </form>
</template>
