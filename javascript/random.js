export default class Random {

    /**
     * Seleciona aleatoriamente um valor inteiro para um dado intervalo **`[minValue, maxValue]`**. Se **`minValue > maxValue`**, retorna `0`.
     * @param {number} minValue - Menor valor inteiro do intervalo.
     * @param {number} maxValue - Maior valor inteiro do intervalo.
     * @returns {number}
     */
    static randint(minValue, maxValue) {

        minValue = Math.floor(minValue);
        maxValue = Math.floor(maxValue);

        if (minValue > maxValue) return 0;

        return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
    }

    /**
     * Seleciona aleatoriamente um dos elementos passados como parâmetros e o retorna.
     * @param  {...any} elements - Conjunto de elementos para serem selecionados.
     */
    static choose(...elements) {

        let randomIndex = this.randint(0, elements.length - 1);
            
        return elements[randomIndex];
    }
}