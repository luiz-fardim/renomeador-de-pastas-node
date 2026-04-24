# 📁 Renomeador de Pastas com Node.js

![Node.js](https://img.shields.io/badge/Node.js-18%2B-green) ![Licença](https://img.shields.io/badge/licença-MIT-blue) ![Módulo](https://img.shields.io/badge/módulo-fs%2Fpromises-purple)

Script em Node.js que renomeia pastas em lote de forma automática, substituindo prefixos ou espaços nos nomes. Desenvolvido como projeto de estudo do módulo nativo `fs` do Node.js.

## Exemplo

```
Antes             Depois
──────────────    ───────────────
ex001          →  exercicio001
ex002          →  exercicio002
ex003          →  exercicio003
```

## Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior

## Como usar

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/renomeador-pastas.git
cd renomeador-pastas
```

**2. Edite o caminho no arquivo `renomear.js`**

```js
const caminho = 'C:\\Users\\seu-usuario\\Desktop\\sua-pasta';
```

**3. Execute o script**

```bash
node renomear.js
```

**4. Acompanhe o resultado no terminal**

```
Renomeado: ex001 → exercicio001
Renomeado: ex002 → exercicio002
Renomeado: ex003 → exercicio003
```

## Código

```javascript
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
```

## O que aprendi

- Usar o módulo nativo `fs/promises` do Node.js para manipular o sistema de arquivos
- Diferença entre a API de **callbacks** (estilo antigo) e **async/await** (estilo moderno)
- Iterar sobre arquivos e pastas com `readdir`
- Renomear entradas do sistema de arquivos com `rename`
- Usar `startsWith` para filtrar apenas os itens desejados
- Por que `replace('ex', 'exercicio')` funciona sem regex neste caso

## Tecnologias

- [Node.js](https://nodejs.org/) — runtime JavaScript
- `node:fs/promises` — módulo nativo de sistema de arquivos
- `async/await` — para lidar com operações assíncronas de forma limpa

## Licença

MIT
