import { readdir, rename } from 'node:fs/promises';

const caminho = 'C:\\Users\\luizd\\Desktop\\Exercícios  - HTML e CSS';

async function renomearPastas() {
  const itens = await readdir(caminho);

  for (const item of itens) {
    if (!item.startsWith('ex')) continue; 

    const novoNome = item.replace('ex', 'exercicio');

    await rename(
      `${caminho}\\${item}`,
      `${caminho}\\${novoNome}`
    );
    console.log(`Renomeado: ${item} → ${novoNome}`);
  }
}

renomearPastas().catch(console.error);