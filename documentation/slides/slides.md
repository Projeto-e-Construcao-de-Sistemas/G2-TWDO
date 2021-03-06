---
highlighter: shiki
lineNumbers: false
aspectRatio: "16/10"
---

# twdo

---

## Integrantes

\item André Silva de Oliveira
\item Luana da Silva Chaves
\item Pedro Lucas Barros Palma
\item Vítor Barroso de Sousa

---

## Sumário

<pre class="sumario">
<span class="sumario">4</span> Minimundo
<span class="sumario">5</span> Glossário
<span class="sumario">6</span> Requisitos Funcionais
<span class="sumario">9</span> Requisitos Não Funcionais
<span class="sumario">10</span> Regras de Negócio
<span class="sumario">11</span> Integrações
<span class="sumario">12</span> Casos de Uso
    <span class="sumario"> 15</span> Manter Conta
    <span class="sumario"> 24</span> Iniciar Sessão
    <span class="sumario"> 26</span> Enviar Feedback
    <span class="sumario"> 28</span> Mudar tema
    <span class="sumario"> 29</span> Encerrar sessão
    <span class="sumario"> 30</span> Manter Tarefa
    <span class="sumario"> 32</span> Manter Tarefa
<span class="sumario">14</span> Diagrama de Casos de Uso
<span class="sumario">33</span> Diagrama de Classes
<span class="sumario">34</span> Links
</pre>

---

## Minimundo

O twdo é um organizador pessoal de tarefas minimalista, pensado em ser um ambiente simples e livre de distrações, de maneira que o usuário possa focar no que realmente precisa ser feito. Ele faz isso através de uma interface limpa, fácil de entender e agradável de utilizar.
<br>
<br>
Ele permite que o usuário crie uma conta (utilizando e-mail pessoal ou conta existente no GitHub) e já comece a criar suas tarefas. As tarefas podem ser agrupadas em projetos e arrastadas ao longo da tela para ordená-las. Dependendo da direção que o usuário arraste a tarefa, ela pode ser adicionada para um projeto ou iniciar um timer pomodoro para a realização da tarefa. <b> Além disso, no sistema, existirão informações relacionas à temperatura climática. </b>
<br>
<br>

<SlideNumber/>

---

## Glossário

Termo Descrição

---

To-do list Lista (ordenada ou não) de tarefas geralmente utilizada para organização pessoal.  
 API Sigla para "Application Programming Interface", que consiste em um conjunto de métodos prontos para serem utilizados, cujas implementações são abstraídas do desenvolvedor que irá utilizá-los.  
 Chaves de Acesso Chave única utilizada para identificar quem está fazendo uma determinada ação. Amplamente utilizadas para uso de API's externas da aplicação em desenvolvimento.  
 Github Sistema de gerenciamento de repositórios Git em nuvem.  
 Registro Criação de conta única para um usuário poder utilizar a aplicação.  
 Login Acesso à uma conta previamente criada pelo usuário para poder utilizar a aplicação.  
 JWT Sigla para "JSON Web Token". Consiste em um código hash devolvido pelo servidor para o navedor após login bem sucedido. O hash conterá informações à respeito do usuário e será enviado em futuros pedidos para o servidor quando o usuário precisar acessar rotas protegidas, obrigando-o a realizar o login para utilizar o sistema.
Tarefa Tarefa ligada à um único usuário que conterá uma descrição, data e data limite.  
 Projeto Conjunto de Tarefas.  
 Pomodoro Timer utilizado para que o usuário possa focar em realizar uma tarefa dentro de um determinado período de tempo.  
 Modo Foco Tem a função de ampliar a tela do Pomodoro, deixando-o em tela cheia

<SlideNumber/>

---

## Requisitos Funcionais <h3>Projetos e Tarefas</h3>

RF Descrição

---

<b>RF1</b> <b>O sistema deve permitir que o usuário crie uma Tarefa preenchendo os campos descrição.</b>
<b>RF2</b> <b>O sistema deve permitir que o usuário liste as Tarefas criadas</b>  
 RF3 O sitema deve permitir que o usuário marque uma Tarefa como feita  
 <b>RF4</b> <b>O sitema deve permitir que o usuário edite a descrição de uma Tarefa e Projetos </b>  
 RF5 O sistema deve permitir que o usuário crie um Projeto preenchendo o campo descrição  
 RF6 O sistema deve permitir que o usuário agrupe Tarefas em um Projeto  
 RF7 O sistema deve permitir que o usuário veja seus Projetos atuais  
 RF8 O sistema deve permitir que o usuário edite as Tarefas de seus Projetos  
 <b>RF9</b> <b>O sistema deve permitir que o usuário arraste suas tarefas e projetos</b>  
 <b>RF10</b> <b>O sistema deve permitir que o usuário reordene suas tarefas e projetos</b>

<SlideNumber/>

---

## Requisitos Funcionais <h3>Conta e Autenticação</h3>

RF Descrição

---

<b>RF11</b> <b>O sistema deve permitir que o usuário crie uma conta utilizando email, nome e senha</b>
RF12 O sistema deve permitir que o usuário se autentique informando email e senha  
 RF13 O sistema deve permitir que o usuário delete sua própria conta  
 RF14 O sistema deve permitir que o usuário altere o email, senha e nome da sua própria conta

<SlideNumber/>

---

## Requisitos Funcionais <h3>Features e Armazenamento</h3>

RF Descrição

---

RF15 O sistema deve permitir que o usuário utilize um timer pomodoro  
 RF16 O sistema deve permitir que o usuário possa enviar um feedback para os desenvolvedores  
 RF17 O sistema deve permitir que o usuário altere o tema da aplicação  
 <b>RF18</b> <b>O sistema deve permitir que o usuário veja a temperatura atual do clima dentro da aplicação</b>

<SlideNumber/>

---

## Requisitos Não Funcionais

RNF1 & O sistema deve criptografar a senha do usuário utilizando a biblioteca brcypt.js antes de armazená-la no banco de dados \\
RNF2 & O sistema deve permitir que o usuário ao alterar um tema tenha as opções de modo claro e modo escuro que auxiliam na melhor visualização do sistema em diferentes horas do dia \\
RNF3 & O sistema deve permitir ao usuário a opção de autenticação por meio da integração com a API do Github \\
RNF4 & O sistema deve armazenar os registros de Usuários, Tarefas e Projetos em banco de dados \\
RNF5 & O sistema deve coletar informações sobre a temperatura climática através do weather API \\

<SlideNumber/>

---

## Regras de Negócio

RN1 & Um usuário não pode cadastrar uma conta com um email já pertencente à outra conta cadastrada. \\
RN2 & Um usuário não pode alterar o email da sua conta para um email já pertencente à outra conta cadastrada. \\
RN3 & Um usuário não pode associar uma Tarefa à mais de um Projeto. \\
RN4 & Um usuário só pode realizar qualquer operação de usuário (Manter tarefas, projetos, deletar conta, alterar email, senha e nome) após se autenticar. \\
RN5 & Uma tarefa é criada preenchendo obrigatoriamente o campo "descrição". \\
RN6 & Um projeto é criado preenchendo obrigatoriamente o campo "descrição" e atribuindo nenhuma ou inúmeras tarefas para ele. \\
RN7 & Um usuário só poderá trocar a senha fornecendo a senha atual da conta. \\
RN8 & Só serão aceitas senhas com no minimo 5 caracteres. \\
RN9 & Um usuário só poderá iniciar a sessão caso tenha uma conta registrada. \\
RN10 & Um cadastro é feito preenchendo obrigatoriamente os campos "email", "nome" e "senha" \\
RN11 & Deletando um projeto suas tarefas também devem ser deletadas \\

<SlideNumber/>

---

## Integrações

1. Github oAuth
2. Weather API
3. SendGrid

<SlideNumber/>

---

## Casos de Uso

<pre>
\item 1. Manter Conta
    \begin{enumerate}
    \item 1.1 Registrar Conta
    \item 1.2 Deletar Conta
    \item 1.3 Alterar Email
    \item 1.4 Alterar Senha
    \item 1.5 Alterar Nome
    \end{enumerate}
\item 2. Iniciar Sessão
    \begin{enumerate}
    \item 2.1 Iniciar sessão com email
    \item 2.2 Iniciar sessão com github
    \end{enumerate}
\item 3. Enviar Feedback
\item 4. Mudar Tema da Aplicação
\item 5. Encerrar sessão
\item 6. Manter Tarefa
    \begin{enumerate}
    \item 6.1 Registrar tarefa
    \item 6.2 Deletar tarefa
    \item 6.3 Alterar descrição da tarefa
    \end{enumerate}
        \begin{enumerate}
        \item 6.4 Arrastar Tarefa
        \item 6.4.1. Reordenar Tarefa
        \item 6.4.2. Ativar Pomodoro
        \item 6.4.3. Mover Tarefa de Projeto
        \end{enumerate}
</pre>

<SlideNumber/>

---

## Casos de Uso

<pre>
<span>7.</span> Ver Previsão de Temperatura
<b><span>8.</span> Manter Projeto
    <span>8.1</span> Registrar Projeto
    <span>8.2</span> Deletar Projeto
    <span>8.3</span> Alterar descrição do Projeto
    <span>8.4</span> Arrastar Projeto
        <span>8.4.1</span> Reordenar Projeto </b>
<b><span>9.</span> Usar Pomodoro
    <span>9.1</span> Iniciar pomodoro
    <span>9.2</span> Pausar pomodoro
    <span>9.3</span> Reiniciar pomodoro</b>
<b><span>10.</span> Iniciar Modo Foco</b>
</pre>

<SlideNumber/>

---

## Diagrama de Casos de Uso

<img src="documentation/docs/twdousecase_3.png">

<SlideNumber/>

---

## Casos de Uso <h3>1.1 - Registrar Conta</h3>

Propriedade Descrição  
 -----------------& ------------------------------------------------------------------------------------------------------------------
Nome & Registrar conta \\
Objetivo & Criar conta na aplicação \\
Atores & Usuário \\
Pré-condições & Ator na tela de cadastro \\
Trigger & Ator seleciona "Cadastro" \\
Fluxo Principal & 1. Sistema apresenta campos para preenchimento \\
& 2. Ator digita um nome de usuário, email, senha nos campos do formulário e seleciona "Cadastrar" [A1] [A2] \\
& 3. Sistema redireciona para tela de login \\
Fluxo Alternativo& A1 - E-mail já registrado \\
& A1.1 - O Sistema apresenta uma mensagem de erro \\
& A1.2 - Volta para o passo 1 \\
Fluxo Alternativo& A2 - Senha inválida \\
& A2.1 - O Sistema apresenta uma mensagem de erro \\
& A2.2 - Volta para o passo 1 \\
Extensões & N/A \\
Pós-condições & O ator é redirecionado para a tela de login \\
Regras de negócio& RN1, RN8 \\
&
&

## Casos de Uso <h&3>1.2 - Deletar Conta</h3>

&
Propriedade & Descrição  
 -----------------& -------------------------------------------------------------
Nome & Deletar conta \\
Objetivo & Deletar conta da aplicação \\
Atores & Usuário \\
Pré-condições & Ator precisa estar logado e na página "Configurações" \\
Trigger & Ator clica em "Deletar Conta" \\
Fluxo Principal & 1. Sistema pede uma confirmação da ação[A1] \\
& 2. Ator confirma a ação \\
& 3. Sistema deleta a conta e redireciona para tela de cadastro\\
Fluxo Alternativo& A1 - Não confirmar a ação \\
& A1.1 O Sistema não deleta a conta \\
Extensões & N/A \\
Pós-condições & O Ator é redirecionado para a tela de cadastro \\
Regras de negócio& RN4 \\
&

## Casos de Uso <h&3>1.3 - Alterar Email</h3>

&
Propriedade & Descrição  
 -----------------& -------------------------------------------------------------------------
Nome & Alterar email \\
Objetivo & Alterar endereço de email da conta \\
Atores & Usuário \\
Pré-condições & Ator precisa estar logado e na página "Configurações" \\
Trigger & Ator clica em "Mudar meu email" \\
Fluxo Principal & 1. Sistema apresenta campos para preenchimento do formulário \\
& 2. Ator preenche formulário com novo email e clica em "Salvar Alterações"\\
& 3. Sistema pede uma confirmação da ação [A2] \\
& 4. Ator confirma a ação [A1] \\
& 4. Sistema altera email e mostra uma notificação \\
Fluxo Alternativo& A1 - E-mail já registrado \\
& A1.1 - O sistema apresenta uma mensagem de erro \\
& A1.2 - Volta para o passo 1 \\
Fluxo Alternativo& A2 - Não confirmar a ação \\
& A2.1 O Sistema não altera o email \\
Extensões & N/A \\
Pós-condições & O Ator permanece na tela "Configurações"\\
Regras de negócio& RN2, RN4 \\
&

## Casos de Uso <h&3>1.4 - Alterar Senha</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------------------------------------------------------------
Nome & Alterar senha \\
Objetivo & Alterar a senha da conta \\
Atores & Usuário \\
Pré-condições & Ator precisa estar logado e na página "Configurações" \\
Trigger & Ator clica em "Mudar Minha Senha" \\
Fluxo Principal & 1. Sistema apresenta campo para preenchimento da nova senha \\
& 1. O Ator preenche os campos "Senha atual", "Nova senha" e clica em "Salvar Alterações" \\
& 2. O Sistema pede uma confirmação da ação \\
& 3. O Ator confirma a ação [A2] \\
& 4. O Sistema valida a senha atual e mostra uma notificação de que as configurações foram salvas [A1]\\
Fluxo Alternativo& A1 - Senha atual invalida \\
& A1.1 - O sistema apresenta uma mensagem de erro \\
& A1.2 - Volta para o passo 1 \\
Fluxo Alternativo& A2 - Não confirmar a ação \\
& A2.1 O Sistema não altera a senha \\
Extensões & N/A \\
Pós-condições & O Ator permanece na tela "Configurações"\\
Regras de negócio& RN4, RN7, RN8 \\
&

## Casos de Uso <h&3>1.5 - Alterar Nome</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------------------------------------------------------------------
Nome & Alterar nome \\
Objetivo & Alterar a nome da conta \\
Atores & Usuário \\
Pré-condições & Ator precisa estar logado e na página "Configurações" \\
Trigger & Ator clica em "Change my username" \\
Fluxo Principal & 1. Sistema apresenta campo para preenchimento do novo nome \\
& 2. O Ator preenche o campo "Novo Nome" e clica em "Salvar Alterações" \\
& 3. O Sistema pede uma confirmação da ação \\
& 4. O Ator confirma a [A1] ação \\
& 5. O Sistema mostra uma notificação de que as configurações foram salvas e retira a caixa de texto da tela\\
Fluxo Alternativo& A1 - Não confirmar a ação \\
& A1.1 O Sistema não altera o nome \\
Extensões & N/A \\
Pós-condições & O Ator permanece na tela "Configurações"\\
Regras de negócio& RN4 \\
&

## Casos de Uso <h&3>2.1 - Iniciar sessão com email</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------------------------------------------------
Nome & Iniciar sessão com email \\
Objetivo & Iniciar sessão na aplicação \\
Atores & Usuário \\
Pré-condições & O usuário não pode estar logado na aplicação \\
Trigger & Ator seleciona "Entrar" \\
Fluxo Principal & 1. Sistema apresenta campos para preenchimento dos dados \\
& 2. O Ator digita email e senha nos campos do formulário e clica em "Entrar" \\
& 3. O Sistema valida os campos preenchidos[A1] e redireciona para tela inicial de "Today"\\
Fluxo Alternativo& A1 - Email ou senha inválidas \\
& A1.1 O Sistema informa que um dos campos está incorreto \\
& A1.2 Volta para o passo 1 \\
Extensões & N/A \\
Pós-condições & O Ator é redirecionado para a tela "Today" \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>2.2 - Iniciar sessão com github</h3>

&
Propriedade & Descrição  
 -----------------&--- -----------------------------------------------------
Nome & Iniciar sessão com github \\
Objetivo & Iniciar sessão na aplicação \\
Atores & Usuário \\
Pré-condições & O usuário não pode estar logado na aplicação \\
Trigger & Ator seleciona "Entrar com Github" \\
Fluxo Principal & 1 Sistema redireciona para a tela de confirmação [A1]\\
& 2 Ator seleciona "I accept" \\
& 3 Sistema redireciona para tela "Today" \\
Fluxo Alternativo& A1 Não confirmar a ação \\
& A1.1 O Sistema não efetua o login \\
Extensões & N/A \\
Pós-condições & O Ator é redirecionado para a tela "Today" \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>3 - Enviar Feedback</h3>

&
Propriedade & Descrição  
 -----------------& --------------------------------------------------------------------------------------
Nome & Enviar Feedback \\
Objetivo & Enviar feedback da aplicação para os desenvolvedores \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e na tela de "Configurações" \\
Trigger & Ator seleciona "Send Feedback" \\
Fluxo Principal & 1. Sistema mostra uma caixa de texto para o usuário \\
& 2. Ator digita sua mensagem na caixa de texto e clica no botão "Enviar feedback" \\
& 3. O Sistema mostra uma notificação de agradecimento e retira a caixa de texto da tela\\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O Ator permanece na tela "Configurações" \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>4 - Mudar Tema</h3>

&
Propriedade & Descrição  
 -----------------& ---------------------------------------------------------------------
Nome & Mudar Tema \\
Objetivo & Mudar o tema da aplicação para Dark ou Light \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e na tela de "Configurações"\\
Trigger & O Ator clica na caixa de "Temas" \\
Fluxo Principal & 1. Sistema apresenta as opções de Temas \\
& 2. Ator seleciona um dos temas \\
& 3. O Sistema muda de acordo com a opção escolhida e salva as mudanças\\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O Ator permanece na tela "Configurações" \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>5 - Encerrar Sessão</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------------------------
Nome & Encerrar sessão \\
Objetivo & Encerrar sessão na aplicação \\
Atores & Usuário \\
Pré-condições & O Usuário precisa estar logado na aplicação e na na tela de User\\
Trigger & Ator seleciona "Sair" \\
Fluxo Principal & 1. O Sistema solicita uma confirmação da ação [A1] \\
& 2. O Ator confirma a ação \\
& 3. O Sistema efetua o logout \\
Fluxo Alternativo& A1 Não confirmar a ação \\
& A1.1 O Sistema não efetua o logout \\
Extensões & N/A \\
Pós-condições & O Ator é redirecionado para a tela de "Entrar" \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.1 - Registrar Tarefa</h3>

&
Propriedade & Descrição  
 -----------------& -------------------------------------------------
Nome & Registrar tarefa \\
Objetivo & Criar uma tarefa na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & O Ator clica no sinal "+" \\
Fluxo Principal & 1. O Sistema apresenta uma caixa de preenchimento\\
& 2. O Ator digita a descrição da tarefa \\
& 3. O Sitema salva a nova tarefa \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN3, RN4, RN5 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.2 - Deletar Tarefa</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------
Nome & Deletar tarefa \\
Objetivo & Deletar uma tarefa na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & O Ator clica no icone de deletar (lixeira) \\
Fluxo Principal & 1. O Sistema pede uma confirmação da ação [A1]\\
& 2. O Ator confirma a ação \\
& 3. O Sistema deleta a tarefa \\
Fluxo Alternativo& A1 Não confirmar a ação \\
& A1.1 O Sistema não deleta a tarefa \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.3 - Alterar a descrição da Tarefa</h3>

&
Propriedade & Descrição  
 -----------------& -----------------------------------------------
Nome & Alterar a descrição da tarefa \\
Objetivo & Alterar a descrição de uma tarefa na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & O Ator clica na tarefa \\
Fluxo Principal & 1. O Sistema libera o formulário para alteração\\
& 2. O Ator preenche o formulário \\
& 3. O Sistema salva a alteração feita \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.4.1 - Reordenar tarefa</h3>

&
Propriedade & Descrição  
 -----------------& ------------------------------------------------------------------------------------
Nome & Reordenar tarefa \\
Objetivo & Alterar a ordenação de uma tarefa na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter pelo menos 2 tarefas criadas\\
Trigger & O Ator arrasta uma tarefa para a posição que deseja \\
Fluxo Principal & 1. O Sistema salva a nova ordenação \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.4.2 - Ativar pomodoro</h3>

&
Propriedade & Descrição  
 -----------------& ------------------------------------------------------------------------------------
Nome & Ativar pomodoro \\
Objetivo & Permitir que o usuário utilize o pomodoro \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter pelo menos uma tarefa criada\\
Trigger & O Ator arrasta uma tarefa para o ícone do pomodoro \\
Fluxo Principal & 1. O Sistema exibe o pomodoro na tela da aplicação \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>6.4.3 - Mover tarefa de projeto</h3>

&
Propriedade & Descrição  
 -----------------& --------------------------------------------------------------------------------------------------
Nome & Mover tarefa de projeto \\
Objetivo & Permitir que o usuário mova a tarefa de um projeto para outro \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação, ter criado uma tarefa e ter criado pelo menos 2 projetos\\
Trigger & O Ator arrasta uma tarefa para um projeto \\
Fluxo Principal & 1. O Sistema salva a terefa no projeto escolhido \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio & RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>7 - Ver a temperatura atual</h3>

&
Propriedade & Descrição  
 -----------------& ---------------------------------------------------------------
Nome & Ver a temperatura atual \\
Objetivo & Ver a temperatura atual na aplicação \\
Atores & N/A \\
Pré-condições & O Usuário precisa estar logado na aplicação e na página "Today"\\
Trigger & O Ator faz login na aplicação \\
Fluxo Principal & 1. O Sistema exibe a temperatura atual do dia na tela \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & N/A \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>8.1 - Registrar projeto</h3>

&
Propriedade & Descrição  
 -----------------& -------------------------------------------------
Nome & Registrar projeto \\
Objetivo & registrar um projeto na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & **_precisa ser decidido_** \\
Fluxo Principal & 1. O Sistema apresenta uma caixa de preenchimento\\
& 2. O Ator digita a descrição do projeto \\
& 3. O Sitema salva o novo projeto \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN3, RN4, RN6 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>8.2 - Deletar projeto</h3>

&
Propriedade & Descrição  
 -----------------& ----------------------------------------------
Nome & Deletar projeto \\
Objetivo & Deletar um projeto na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & **_precisa ser decidido_** \\
Fluxo Principal & 1. O Sistema pede uma confirmação da ação [A1]\\
& 2. O Ator confirma a ação \\
& 3. O Sistema deleta o projeto \\
Fluxo Alternativo& A1 Não confirmar a ação \\
& A1.1 O Sistema não deleta o projeto \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4, RN11 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>8.3 - Alterar a descrição do projeto</h3>

&
Propriedade & Descrição  
 -----------------& -----------------------------------------------
Nome & Alterar a descrição do projeto \\
Objetivo & Alterar a descrição de um projeto na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação \\
Trigger & **_precisa ser decidido_** \\
Fluxo Principal & 1. O Sistema libera o formulário para alteração\\
& 2. O Ator preenche o formulário \\
& 3. O Sistema salva a alteração feita \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>8.4.1 - Reordenar projeto</h3>

&
Propriedade & Descrição  
 -----------------& -------------------------------------------------------------------------------------
Nome & Reordenar projeto \\
Objetivo & Alterar a ordenação de uma projeto na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter pelo menos 2 projetos criadas\\
Trigger & O Ator arrasta um projeto para a posição que deseja \\
Fluxo Principal & 1. O Sistema salva a nova ordenação \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio & RN4 \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>9.1 - Iniciar pomodoro</h3>

&
Propriedade & Descrição  
 -----------------& --------------------------------------------------------------------------------
Nome & Iniciar pomodoro \\
Objetivo & Iniciar o timer pomodor na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter ativado o timer pomodoro\\
Trigger & O Ator clica no ícone de 'Começar' \\
Fluxo Principal & 1. O Sistema inicia a contagem do cronômetro \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>9.2 - Pausar pomodoro</h3>

&
Propriedade & Descrição  
 -----------------& ---------------------------------------------------------------------------------
Nome & Pausar pomodoro \\
Objetivo & Pausar o timer pomodor na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter iniciado o timer pomodoro\\
Trigger & O Ator clica no ícone de 'Parar' \\
Fluxo Principal & 1. O Sistema pausa a contagem do cronômetro \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>9.3 - Reiniciar pomodoro</h3>

&
Propriedade & Descrição  
 -----------------& ---------------------------------------------------------------------------------
Nome & Reiniciar pomodoro \\
Objetivo & Reiniciar o timer pomodor na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter iniciado o timer pomodoro\\
Trigger & O Ator clica no ícone de 'Recomeçar' \\
Fluxo Principal & 1. O Sistema reinicia a contagem do cronômetro \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& N/A \\
&
<SlideNumber/>&
&
---&
&

## Casos de Uso <h&3>10. - Iniciar modo foco</h3>

&
Propriedade & Descrição  
 -----------------& --------------------------------------------------------------------------------
Nome & Iniciar modo foco \\
Objetivo & Exibir o modo foco na aplicação \\
Atores & Usuário \\
Pré-condições & O Ator precisa estar logado na aplicação e precisar ter ativado o timer pomodoro\\
Trigger & O Ator clica no ícone de expandir \\
Fluxo Principal & 1. O Sistema aplica o modo foco \\
Fluxo Alternativo& N/A \\
Extensões & N/A \\
Pós-condições & O ator continua na mesma página \\
Regras de negócio& N/A \\
<SlideNumber/>

---

## Diagrama de Classes

<img src="documentation/docs/class-diagram-3-0.png">

<SlideNumber/>

---

## Links

\item Protótipo: https://balsamiq.cloud/sxy21mi/pcz15al
\item Entrega 1: https://youtu.be/J9r6dCj7s7g
\item Entrega 2: https://youtu.be/dIR6Wl-MPQs

<SlideNumber/>

## Casos de Uso <h3>12. - Mudar cor de destaque</h3>

| Propriedade | Descrição |
| ----------- | --------- |

Nome & Mudar cor de destaque\\  
 Objetivo & Altera a cor do botão do destaque \\  
 Atores & Usuário \\  
 Pré-condições & O Ator precisa estar logado na aplicação e nas configurações \\  
 Trigger & O Ator clica na opção de mudar de cor \\  
 Fluxo Principal & 1. O Sistema aplica a cor alterada \\  
 Fluxo Alternativo & N/A \\  
 Extensões & N/A \\  
 Pós-condições & O ator continua na mesma página \\  
 Regras de negócio & N/A\\
