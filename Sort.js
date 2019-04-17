function insertionSort(array){

	var pivot, i, j;

	for (i = 1; i < array.length ; i ++){

		pivot = array[i];
		j = i - 1;

		while(j >= 0 && array[j] > pivot){

			array[j+1] = array[j];
			j = j - 1;
		}
		array[j+1] = pivot;
	}

	return array;
}

function selectionSort(array){

	var i, j, aux, menorValor;

	for (i = 0; i < array.length - 1; i++){

		aux = i; //posicao do menor valor

		for (j = i + 1; j < array.length; j++)

			//Se encontrar um valor menor, substitua
			if( array[j] < array[aux] )	
				aux = j;

		//Se o menor valor for diferente do array[i], troque
		//O if foi feito para nao trocar numeros repetidos
		if (array[i] != array[aux]){
			menorValor = array[aux];
			array[aux] = array[i];
			array[i] = menorValor;
		}

	}

	return array;

}
