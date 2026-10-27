/* ============================================================
   i18n.js — idiomas do site: português (original) · inglês (EUA) · espanhol

   Como funciona
   - O texto em português fica no próprio HTML/JS (é a fonte da verdade).
   - Aqui ficam as traduções. Cada linha de ROWS é [português, inglês, espanhol];
     o português precisa ser IDÊNTICO ao texto da página (espaços extras não contam).
   - Texto sem tradução cai de volta para o português. Para listar o que falta,
     troque o idioma e rode  I18N.missing()  no console do navegador.
   - Idioma escolhido fica salvo no navegador. Link direto: index.html?lang=en
   ============================================================ */
(function () {
  'use strict';

  var LANGS = ['pt', 'en', 'es'];
  var HTML_LANG = { pt: 'pt-BR', en: 'en', es: 'es' };

  /* ---------------- traduções: [pt, en, es] ---------------- */
  var ROWS = [
    /* ---- documento ---- */
    [`Lucas Costa — Desenvolvedor Back-End`, `Lucas Costa — Back-End Developer`, `Lucas Costa — Desarrollador Back-End`],
    [`Portfólio de Lucas dos Santos Costa — desenvolvedor back-end especializado em sistemas orientados a eventos, integrações de alta escala, mensageria, observabilidade e reconhecimento facial em tempo real (Go + Python). Entrega com Git flow, pipelines CI/CD, testes automatizados e homologação.`,
     `Portfolio of Lucas dos Santos Costa — back-end developer specializing in event-driven systems, high-scale integrations, messaging, observability, and real-time facial recognition (Go + Python). Delivers with Git flow, CI/CD pipelines, automated tests, and acceptance testing.`,
     `Portafolio de Lucas dos Santos Costa — desarrollador back-end especializado en sistemas orientados a eventos, integraciones de alta escala, mensajería, observabilidad y reconocimiento facial en tiempo real (Go + Python). Entrega con Git flow, pipelines CI/CD, pruebas automatizadas y validación.`],
    [`Idioma`, `Language`, `Idioma`],
    [`Alternar tema`, `Toggle theme`, `Cambiar tema`],
    [`Seções da página`, `Page sections`, `Secciones de la página`],
    [`Estágios do pipeline VisionFlow`, `VisionFlow pipeline stages`, `Etapas del pipeline VisionFlow`],

    /* ---- navegação ---- */
    [`currículo →`, `resume →`, `currículum →`],
    [`início`, `home`, `inicio`],
    [`sobre`, `about`, `acerca de`],
    [`stack`],
    [`projetos`, `projects`, `proyectos`],
    [`atuação`, `work areas`, `áreas de trabajo`],
    [`método`, `method`, `método`],
    [`clientes`, `clients`, `clientes`],
    [`trajetória`, `career`, `trayectoria`],
    [`contato`, `contact`, `contacto`],

    /* ---- hero ---- */
    [`disponível para novos projetos · Estância Velha / Porto Alegre — RS`, `available for new projects · Estância Velha / Porto Alegre — RS`, `disponible para nuevos proyectos · Estância Velha / Porto Alegre — RS`],
    [`Desenvolvedor Back-End`, `Back-End Developer`, `Desarrollador Back-End`],
    [`Go · Python · integrações`, `Go · Python · integrations`, `Go · Python · integraciones`],
    [`sistemas orientados a eventos`, `event-driven systems`, `sistemas orientados a eventos`],
    [`CI/CD · testes automatizados · releases`, `CI/CD · automated tests · releases`, `CI/CD · pruebas automatizadas · releases`],
    [`back-end é meu foco — full-stack quando precisa`, `back end is my focus — full stack when needed`, `el back-end es mi foco — full-stack cuando hace falta`],
    [`Construo <b>sistemas orientados a eventos</b> que processam dados em tempo real e conversam com o mundo por meio de <b>integrações</b>. Já entreguei <b>+50 integrações</b> — do micro ao macro — em <b>Go</b> e <b>Python</b>, com mensageria, observabilidade fim a fim e pipelines de reconhecimento facial que processam milhares de faces em segundos.`,
     `I build <b>event-driven systems</b> that process data in real time and talk to the world through <b>integrations</b>. I have delivered <b>50+ integrations</b> — from micro to macro — in <b>Go</b> and <b>Python</b>, with messaging, end-to-end observability, and facial recognition pipelines that process thousands of faces in seconds.`,
     `Construyo <b>sistemas orientados a eventos</b> que procesan datos en tiempo real y se comunican con el mundo mediante <b>integraciones</b>. He entregado <b>+50 integraciones</b> — de lo micro a lo macro — en <b>Go</b> y <b>Python</b>, con mensajería, observabilidad de extremo a extremo y pipelines de reconocimiento facial que procesan miles de rostros en segundos.`],
    [`Ver projetos ↓`, `View projects ↓`, `Ver proyectos ↓`],
    [`Currículo / PDF`, `Resume / PDF`, `Currículum / PDF`],
    [`Contato`, `Contact`, `Contacto`],
    [`event-driven pipeline · live`],
    [`▲ throughput: milhares de eventos/s`, `▲ throughput: thousands of events/s`, `▲ throughput: miles de eventos/s`],
    [`upload`], [`storage`], [`worker`],
    [`evento`, `event`, `evento`],
    [`metadados`, `metadata`, `metadatos`],
    [`fila`, `queue`, `cola`],
    [`IA`, `AI`, `IA`],
    [`entregas realizadas`, `deliveries completed`, `entregas realizadas`],
    [`anos em produção`, `years in production`, `años en producción`],
    [`stack principal em produção`, `core stack in production`, `stack principal en producción`],
    [`clientes públicos e privados`, `public and private clients`, `clientes públicos y privados`],

    /* ---- sobre ---- */
    [`Back-end que resolve problema de negócio, não só de código.`, `Back-end work that solves business problems, not just code problems.`, `Back-end que resuelve problemas de negocio, no solo de código.`],
    [`Desenvolvo <b>sistemas orientados a eventos</b>, <b>integrações</b> e <b>automações</b> para clientes públicos e privados, de aplicações locais a plataformas completas de dados, alertas e reconhecimento facial. Acompanho o ciclo inteiro: desenho, implementação, publicação e <b>sustentação em produção</b>.`,
     `I build <b>event-driven systems</b>, <b>integrations</b>, and <b>automations</b> for public and private clients, from local applications to complete data, alerting, and facial recognition platforms. I follow the whole lifecycle: design, implementation, release, and <b>production support</b>.`,
     `Desarrollo <b>sistemas orientados a eventos</b>, <b>integraciones</b> y <b>automatizaciones</b> para clientes públicos y privados, desde aplicaciones locales hasta plataformas completas de datos, alertas y reconocimiento facial. Acompaño el ciclo completo: diseño, implementación, publicación y <b>soporte en producción</b>.`],
    [`Uso <b>Go</b> onde desempenho e concorrência importam e <b>Python</b> na análise de dados e em provas de conceito. <b>Segurança</b> e <b>auditoria</b> entram no desenho, não depois. Apoio tecnicamente os demais desenvolvedores e participo das reuniões técnicas com clientes, traduzindo requisitos em solução.`,
     `I use <b>Go</b> where performance and concurrency matter and <b>Python</b> for data analysis and proofs of concept. <b>Security</b> and <b>auditing</b> are part of the design, not an afterthought. I support fellow developers technically and join technical meetings with clients, turning requirements into solutions.`,
     `Uso <b>Go</b> donde importan el rendimiento y la concurrencia, y <b>Python</b> en análisis de datos y pruebas de concepto. La <b>seguridad</b> y la <b>auditoría</b> forman parte del diseño, no vienen después. Apoyo técnicamente a otros desarrolladores y participo en las reuniones técnicas con clientes, traduciendo requisitos en soluciones.`],
    [`Entrego com <b>ambientes separados</b>, <b>pipelines e testes automatizados</b> e comunicação transparente com a equipe e o cliente. <a href="#metodo">Veja o método →</a>`,
     `I deliver with <b>separate environments</b>, <b>automated pipelines and tests</b>, and transparent communication with the team and the client. <a href="#metodo">See the method →</a>`,
     `Entrego con <b>entornos separados</b>, <b>pipelines y pruebas automatizados</b> y comunicación transparente con el equipo y el cliente. <a href="#metodo">Ver el método →</a>`],
    [`função`, `role`, `rol`],
    [`também`, `also`, `también`],
    [`linguagens`, `languages`, `lenguajes`],
    [`dados`, `data`, `datos`],
    [`mensageria`, `messaging`, `mensajería`],
    [`entrega`, `delivery`, `entrega`],
    [`local`, `location`, `ubicación`],
    [`status`],
    [`Back-End Pleno`, `Mid-level Back-End`, `Back-End Semi Senior`],
    [`Git flow · CI/CD · testes`, `Git flow · CI/CD · tests`, `Git flow · CI/CD · pruebas`],
    [`RS — Brasil`, `RS — Brazil`, `RS — Brasil`],
    [`● aberto a propostas`, `● open to proposals`, `● abierto a propuestas`],

    /* ---- stack ---- */
    [`Ferramentas que uso em produção.`, `Tools I use in production.`, `Herramientas que uso en producción.`],
    [`Selecionadas pela necessidade real dos projetos — não por moda. Use as abas para ir direto ao grupo que interessa.`,
     `Chosen for what the projects actually need — not for trends. Use the tabs to jump straight to the group you care about.`,
     `Elegidas por la necesidad real de los proyectos, no por moda. Usa las pestañas para ir directo al grupo que te interesa.`],
    [`todas`, `all`, `todas`],
    [`bancos & cache`, `databases & cache`, `bases de datos y caché`],
    [`deploy & domínios`, `deploy & domains`, `deploy y dominios`],
    [`cloud & devops`, `cloud & devops`, `cloud y devops`],
    [`entrega & qualidade`, `delivery & quality`, `entrega y calidad`],
    [`observabilidade`, `observability`, `observabilidad`],
    [`BI & IA`, `BI & AI`, `BI e IA`],
    [`mensageria & tempo real`, `messaging & real time`, `mensajería y tiempo real`],
    [`bancos de dados & cache`, `databases & cache`, `bases de datos y caché`],
    [`deploy, hosting & domínios`, `deploy, hosting & domains`, `deploy, hosting y dominios`],
    [`cloud, infra & devops`, `cloud, infra & devops`, `cloud, infra y devops`],
    [`versionamento, qualidade & entrega`, `versioning, quality & delivery`, `versionado, calidad y entrega`],
    [`observabilidade & logs`, `observability & logs`, `observabilidad y logs`],
    [`dados, BI & IA`, `data, BI & AI`, `datos, BI e IA`],
    [`produção`, `production`, `producción`],
    [`avançado`, `advanced`, `avanzado`],
    [`busca`, `search`, `búsqueda`],
    [`cache · sessão · tokens`, `cache · session · tokens`, `caché · sesión · tokens`],
    [`logs · métricas`, `logs · metrics`, `logs · métricas`],
    [`hospedagem`, `hosting`, `alojamiento`],
    [`Filas / Dead-letter`, `Queues / Dead-letter`, `Colas / Dead-letter`],
    [`Microserviços`, `Microservices`, `Microservicios`],
    [`Domínios / DNS`, `Domains / DNS`, `Dominios / DNS`],
    [`Deploy contínuo`, `Continuous deployment`, `Despliegue continuo`],
    [`Testes automatizados`, `Automated tests`, `Pruebas automatizadas`],
    [`Homologação / staging`, `Acceptance / staging`, `Validación / staging`],
    [`Releases versionadas`, `Versioned releases`, `Releases versionadas`],
    [`Alertas proativos`, `Proactive alerts`, `Alertas proactivas`],
    [`Auditoria`, `Auditing`, `Auditoría`],
    [`Reconhecimento facial`, `Facial recognition`, `Reconocimiento facial`],

    /* ---- projetos (seção) ---- */
    [`Sistemas que projetei, escrevi e coloquei em produção.`, `Systems I designed, wrote, and put into production.`, `Sistemas que diseñé, escribí y puse en producción.`],
    [`Seleção de projetos autorais em operação hoje, descritos pela arquitetura e pelo problema que resolveram. Detalhes sensíveis — domínios, credenciais e regras internas de cliente — foram omitidos. Os cartões marcados como <b>capacidade</b> são arquiteturas ilustrativas.`,
     `A selection of original projects running today, described by their architecture and the problem they solved. Sensitive details — domains, credentials, and clients' internal rules — have been left out. Cards marked as <b>capability</b> are illustrative architectures.`,
     `Selección de proyectos propios en operación hoy, descritos por su arquitectura y por el problema que resolvieron. Se omitieron los detalles sensibles — dominios, credenciales y reglas internas de clientes —. Las tarjetas marcadas como <b>capacidad</b> son arquitecturas ilustrativas.`],
    [`// arquitetura ilustrativa · event-driven`, `// illustrative architecture · event-driven`, `// arquitectura ilustrativa · event-driven`],
    [`VisionFlow — reconhecimento facial em tempo real`, `VisionFlow — real-time facial recognition`, `VisionFlow — reconocimiento facial en tiempo real`],
    [`Exemplo de arquitetura orientada a eventos que recebe imagens de múltiplas fontes, distribui por filas e entrega a um serviço de IA. Ilustra um desafio real de <b>engenharia de fluxo</b>: viabilizar o processamento de milhares de faces em segundos. Clique em cada estágio para ver o que acontece.`,
     `An example of an event-driven architecture that receives images from multiple sources, distributes them through queues, and hands them to an AI service. It illustrates a real <b>flow engineering</b> challenge: making it possible to process thousands of faces in seconds. Click each stage to see what happens.`,
     `Ejemplo de arquitectura orientada a eventos que recibe imágenes de múltiples fuentes, las distribuye por colas y las entrega a un servicio de IA. Ilustra un desafío real de <b>ingeniería de flujo</b>: hacer viable el procesamiento de miles de rostros en segundos. Haz clic en cada etapa para ver qué ocurre.`],
    [`todos`, `all`, `todos`],
    [`dados & BI`, `data & BI`, `datos y BI`],
    [`alertas`, `alerts`, `alertas`],
    [`integração`, `integration`, `integración`],
    [`IA / visão`, `AI / vision`, `IA / visión`],
    [`infra & automação`, `infra & automation`, `infra y automatización`],
    [`// código-fonte sob NDA — posso detalhar arquitetura, decisões técnicas e trechos representativos em entrevista.`,
     `// source code is under NDA — I can walk through architecture, technical decisions, and representative snippets in an interview.`,
     `// código fuente bajo NDA — puedo detallar arquitectura, decisiones técnicas y fragmentos representativos en una entrevista.`],
    [`estágio`, `stage`, `etapa`],
    [`estado final`, `final state`, `estado final`],
    [`detalhes técnicos`, `technical details`, `detalles técnicos`],
    [`ocultar detalhes`, `hide details`, `ocultar detalles`],
    [`capacidade`, `capability`, `capacidad`],

    /* ---- pipeline VisionFlow ---- */
    [`entrada · SFTP / API`, `intake · SFTP / API`, `entrada · SFTP / API`],
    [`Recebe imagens de sistemas externos e câmeras. Faz a validação inicial: formato, tamanho e integridade antes de qualquer processamento.`,
     `Receives images from external systems and cameras. Runs the initial validation: format, size, and integrity before any processing.`,
     `Recibe imágenes de sistemas externos y cámaras. Hace la validación inicial: formato, tamaño e integridad antes de cualquier procesamiento.`],
    [`Validação de formato e integridade`, `Format and integrity validation`, `Validación de formato e integridad`],
    [`Recepção via SFTP ou API`, `Intake via SFTP or API`, `Recepción vía SFTP o API`],
    [`Barreira contra payloads inválidos`, `Barrier against invalid payloads`, `Barrera contra payloads inválidos`],
    [`armazenamento seguro`, `secure storage`, `almacenamiento seguro`],
    [`A imagem é persistida em storage de objetos com alta disponibilidade, versionamento e retenção configurável.`,
     `The image is persisted in object storage with high availability, versioning, and configurable retention.`,
     `La imagen se guarda en almacenamiento de objetos con alta disponibilidad, versionado y retención configurable.`],
    [`Armazenamento durável e criptografado`, `Durable, encrypted storage`, `Almacenamiento duradero y cifrado`],
    [`Alta disponibilidade`, `High availability`, `Alta disponibilidad`],
    [`Retenção e versionamento configuráveis`, `Configurable retention and versioning`, `Retención y versionado configurables`],
    [`distribuição de eventos`, `event distribution`, `distribución de eventos`],
    [`Detecta o novo arquivo e gera um evento de criação, entregue de forma confiável e escalável ao processador.`,
     `Detects the new file and emits a creation event, delivered reliably and at scale to the processor.`,
     `Detecta el nuevo archivo y genera un evento de creación, entregado de forma confiable y escalable al procesador.`],
    [`Detecção de novos arquivos`, `New file detection`, `Detección de nuevos archivos`],
    [`Geração de evento de criação`, `Creation event emission`, `Generación de evento de creación`],
    [`Entrega confiável e escalável`, `Reliable, scalable delivery`, `Entrega confiable y escalable`],
    [`processamento (Go)`, `processing (Go)`, `procesamiento (Go)`],
    [`Consome o evento, extrai e enriquece os metadados (nome, data, origem, câmera) e publica a mensagem na fila.`,
     `Consumes the event, extracts and enriches the metadata (name, date, source, camera), and publishes the message to the queue.`,
     `Consume el evento, extrae y enriquece los metadatos (nombre, fecha, origen, cámara) y publica el mensaje en la cola.`],
    [`Extração e enriquecimento de metadados`, `Metadata extraction and enrichment`, `Extracción y enriquecimiento de metadatos`],
    [`Escrito em Go pela performance`, `Written in Go for performance`, `Escrito en Go por el rendimiento`],
    [`Publica mensagem na fila`, `Publishes the message to the queue`, `Publica el mensaje en la cola`],
    [`fila de mensagens`, `message queue`, `cola de mensajes`],
    [`Buffer que desacopla os serviços com entrega garantida — o coração da escala. Mensagens persistidas com retry nativo.`,
     `A buffer that decouples services with guaranteed delivery — the heart of scale. Messages are persisted with native retry.`,
     `Un búfer que desacopla los servicios con entrega garantizada: el corazón de la escala. Mensajes persistidos con reintento nativo.`],
    [`Desacoplamento entre serviços`, `Decoupling between services`, `Desacoplamiento entre servicios`],
    [`Entrega garantida + dead-letter`, `Guaranteed delivery + dead-letter`, `Entrega garantizada + dead-letter`],
    [`Absorve picos de milhares de eventos`, `Absorbs spikes of thousands of events`, `Absorbe picos de miles de eventos`],
    [`consumidores (Go)`, `consumers (Go)`, `consumidores (Go)`],
    [`Workers consomem a fila, baixam a imagem, validam e preparam os dados, enviam para a IA e tratam erros.`,
     `Workers consume the queue, download the image, validate and prepare the data, send it to the AI, and handle errors.`,
     `Los workers consumen la cola, descargan la imagen, validan y preparan los datos, los envían a la IA y manejan los errores.`],
    [`Consumo concorrente da fila`, `Concurrent queue consumption`, `Consumo concurrente de la cola`],
    [`Preparo e envio para o serviço de IA`, `Preparation and delivery to the AI service`, `Preparación y envío al servicio de IA`],
    [`Tratamento de erros e reprocesso`, `Error handling and reprocessing`, `Manejo de errores y reprocesamiento`],
    [`reconhecimento`, `recognition`, `reconocimiento`],
    [`Análise da imagem: reconhecimento facial, de objetos e OCR. Retorna o resultado — que segue para sucesso ou retry.`,
     `Image analysis: facial and object recognition plus OCR. Returns the result, which moves on to success or retry.`,
     `Análisis de la imagen: reconocimiento facial, de objetos y OCR. Devuelve el resultado, que sigue hacia éxito o reintento.`],
    [`Reconhecimento facial / objetos / OCR`, `Facial / object recognition / OCR`, `Reconocimiento facial / de objetos / OCR`],
    [`Milhares de faces em segundos`, `Thousands of faces in seconds`, `Miles de rostros en segundos`],
    [`Resultado auditado nos logs`, `Result audited in the logs`, `Resultado auditado en los logs`],
    [`Sucesso`, `Success`, `Éxito`],
    [`resultado · auditoria`, `result · audit`, `resultado · auditoría`],
    [`Resultado salvo e imagem anotada. Notificação em tempo real na tela do cliente (WebSocket) e no WhatsApp, com trilha completa de auditoria no Grafana.`,
     `Result saved and image annotated. Real-time notification on the client's screen (WebSocket) and on WhatsApp, with a full audit trail in Grafana.`,
     `Resultado guardado e imagen anotada. Notificación en tiempo real en la pantalla del cliente (WebSocket) y en WhatsApp, con registro completo de auditoría en Grafana.`],
    [`Alerta em tela (WebSocket) + WhatsApp`, `On-screen alert (WebSocket) + WhatsApp`, `Alerta en pantalla (WebSocket) + WhatsApp`],
    [`Logs JSON no Grafana + retenção ClickHouse`, `JSON logs in Grafana + ClickHouse retention`, `Logs JSON en Grafana + retención en ClickHouse`],
    [`Falhas vão para fila de retry / dead-letter`, `Failures go to a retry / dead-letter queue`, `Los fallos van a una cola de reintento / dead-letter`],

    /* ---- cartões de projeto ---- */
    [`plataforma de dados`, `data platform`, `plataforma de datos`],
    [`DataGate — plataforma de dados self-service`, `DataGate — self-service data platform`, `DataGate — plataforma de datos self-service`],
    [`Plataforma que transforma consulta SQL em endpoint REST autenticado. O cliente cadastra a própria conexão (PostgreSQL, MySQL, ClickHouse ou MongoDB), escreve a query e recebe um endpoint versionado, cacheado e pronto para consumo — sem precisar de um back-end dedicado para cada relatório.`,
     `A platform that turns a SQL query into an authenticated REST endpoint. Clients register their own connection (PostgreSQL, MySQL, ClickHouse, or MongoDB), write the query, and get a versioned, cached endpoint ready to consume — no dedicated back end needed for each report.`,
     `Plataforma que convierte una consulta SQL en un endpoint REST autenticado. El cliente registra su propia conexión (PostgreSQL, MySQL, ClickHouse o MongoDB), escribe la query y recibe un endpoint versionado, con caché y listo para consumir, sin necesidad de un back-end dedicado para cada reporte.`],
    [`Autenticação <b>segregada por domínio de confiança</b>: JWT de aplicação, bearer de IdP e token de recurso com segredos distintos, validados na subida — segredo compartilhado derruba o deploy em vez de virar risco silencioso.`,
     `Authentication <b>segregated by trust domain</b>: application JWT, IdP bearer, and resource token with distinct secrets, validated at startup — a shared secret fails the deploy instead of becoming a silent risk.`,
     `Autenticación <b>segregada por dominio de confianza</b>: JWT de aplicación, bearer de IdP y token de recurso con secretos distintos, validados al arrancar; un secreto compartido hace fallar el deploy en vez de convertirse en un riesgo silencioso.`],
    [`Credenciais de conexão cifradas em repouso com <b>AES-256-GCM</b>, em envelope versionado com rotação de chaves e comando dedicado de re-encriptação.`,
     `Connection credentials encrypted at rest with <b>AES-256-GCM</b>, in a versioned envelope with key rotation and a dedicated re-encryption command.`,
     `Credenciales de conexión cifradas en reposo con <b>AES-256-GCM</b>, en un envelope versionado con rotación de claves y un comando dedicado de recifrado.`],
    [`Camada de execução com <b>cache em Redis</b>, jobs agendados via cron para materializar consultas pesadas, exportação para Excel e webhooks de entrega.`,
     `Execution layer with <b>Redis caching</b>, cron-scheduled jobs to materialize heavy queries, Excel export, and delivery webhooks.`,
     `Capa de ejecución con <b>caché en Redis</b>, jobs programados por cron para materializar consultas pesadas, exportación a Excel y webhooks de entrega.`],
    [`Borda endurecida: <b>CORS fail-closed</b>, rate limit por IP com proxies confiáveis declarados, auditoria de acesso e telemetria própria.`,
     `Hardened edge: <b>fail-closed CORS</b>, per-IP rate limiting with declared trusted proxies, access auditing, and its own telemetry.`,
     `Borde endurecido: <b>CORS fail-closed</b>, rate limit por IP con proxies de confianza declarados, auditoría de acceso y telemetría propia.`],
    [`Painel administrativo embarcado, pipeline de CI e deploy versionado em Docker Compose.`,
     `Embedded admin panel, CI pipeline, and versioned deploy with Docker Compose.`,
     `Panel administrativo integrado, pipeline de CI y deploy versionado en Docker Compose.`],
    [`IA / visão computacional`, `AI / computer vision`, `IA / visión por computador`],
    [`escala horizontal`, `horizontal scaling`, `escalado horizontal`],
    [`FaceBridge — ingestão de imagens em tempo real`, `FaceBridge — real-time image ingestion`, `FaceBridge — ingesta de imágenes en tiempo real`],
    [`Consumidor Go · fila → object storage → API facial`, `Go consumer · queue → object storage → facial API`, `Consumidor Go · cola → object storage → API facial`],
    [`Ponte entre a fila de capturas, o object storage e a API de reconhecimento facial. Lê o caminho da imagem publicado na fila, baixa a captura do bucket, valida o arquivo, entrega ao facial e só remove o objeto quando o processamento conclui com sucesso. Roda em N réplicas processando milhares de imagens em paralelo.`,
     `A bridge between the capture queue, object storage, and the facial recognition API. It reads the image path published to the queue, downloads the capture from the bucket, validates the file, hands it to the facial engine, and only deletes the object once processing completes successfully. Runs in N replicas processing thousands of images in parallel.`,
     `Puente entre la cola de capturas, el object storage y la API de reconocimiento facial. Lee la ruta de la imagen publicada en la cola, descarga la captura del bucket, valida el archivo, la entrega al motor facial y solo elimina el objeto cuando el procesamiento termina con éxito. Corre en N réplicas procesando miles de imágenes en paralelo.`],
    [`Topologia de filas com <b>retry por TTL, reprocessamento manual e dead-letter</b>: erro definitivo sai da fila, erro temporário volta sozinho. Um arquivo ruim nunca trava o consumo.`,
     `Queue topology with <b>TTL-based retry, manual reprocessing, and dead-letter</b>: a permanent error leaves the queue, a temporary one comes back on its own. A bad file never blocks consumption.`,
     `Topología de colas con <b>reintento por TTL, reprocesamiento manual y dead-letter</b>: un error definitivo sale de la cola, uno temporal vuelve solo. Un archivo malo nunca bloquea el consumo.`],
    [`<b>Estabilização de imagem</b> antes do envio — confere que o tamanho do objeto parou de variar, eliminando os falsos “arquivo corrompido” causados por upload ainda em andamento.`,
     `<b>Image stabilization</b> before sending — checks that the object size has stopped changing, eliminating false “corrupted file” errors caused by uploads still in progress.`,
     `<b>Estabilización de la imagen</b> antes del envío: verifica que el tamaño del objeto dejó de variar, eliminando los falsos “archivo corrupto” causados por subidas aún en curso.`],
    [`<b>Sessão facial única compartilhada</b> entre todas as réplicas: sem isso, cada container fazia o próprio login e estourava o limite de tokens da API.`,
     `<b>A single shared facial session</b> across all replicas: without it, each container did its own login and blew past the API token limit.`,
     `<b>Sesión facial única compartida</b> entre todas las réplicas: sin esto, cada contenedor hacía su propio login y superaba el límite de tokens de la API.`],
    [`Circuit breaker nas chamadas externas, cache Redis de câmeras e timeout por mensagem com rota própria de reprocesso.`,
     `Circuit breaker on external calls, Redis camera cache, and a per-message timeout with its own reprocessing route.`,
     `Circuit breaker en las llamadas externas, caché Redis de cámaras y timeout por mensaje con ruta propia de reprocesamiento.`],
    [`Logs JSON rotativos como fonte única das métricas no Grafana — sem instrumentação paralela para manter.`,
     `Rotating JSON logs as the single source of Grafana metrics — no parallel instrumentation to maintain.`,
     `Logs JSON rotativos como única fuente de las métricas en Grafana, sin instrumentación paralela que mantener.`],
    [`controle de acesso · setor público`, `access control · public sector`, `control de acceso · sector público`],
    [`3 serviços`, `3 services`, `3 servicios`],
    [`FaceGuard — controle de acesso por reconhecimento facial`, `FaceGuard — access control by facial recognition`, `FaceGuard — control de acceso por reconocimiento facial`],
    [`Suíte de três serviços em Go sobre nuvem · rede pública de ensino`, `Suite of three Go services on the cloud · public school network`, `Suite de tres servicios en Go sobre la nube · red pública de enseñanza`],
    [`Três serviços que sustentam o controle de acesso por reconhecimento facial em uma rede pública de ensino: ingestão das capturas das câmeras, cadastro dos servidores na watch list e devolução dos reconhecimentos ao sistema de gestão do órgão.`,
     `Three services that power facial-recognition access control in a public school network: ingestion of camera captures, enrollment of staff on the watch list, and return of recognitions to the agency's management system.`,
     `Tres servicios que sostienen el control de acceso por reconocimiento facial en una red pública de enseñanza: ingesta de las capturas de las cámaras, registro de los funcionarios en la watch list y devolución de los reconocimientos al sistema de gestión del organismo.`],
    [`<b>Ingestão</b> — consumer de fila em nuvem disparado por evento de storage: concorrência configurável por réplica, visibility timeout calculado para o lote e comando de <i>replay</i> que relê o storage por prefixo e período para recuperar o que caiu na fila morta.`,
     `<b>Ingestion</b> — a cloud queue consumer triggered by a storage event: per-replica configurable concurrency, a visibility timeout calculated for the batch, and a <i>replay</i> command that re-reads storage by prefix and period to recover whatever landed in the dead-letter queue.`,
     `<b>Ingesta</b>: consumer de cola en la nube disparado por un evento de storage, con concurrencia configurable por réplica, visibility timeout calculado para el lote y un comando de <i>replay</i> que relee el storage por prefijo y período para recuperar lo que cayó en la cola de mensajes fallidos.`],
    [`<b>Cadastro</b> — aplicação web que valida o servidor na base oficial do órgão e faz o vínculo automático na watch list do facial: sessão por cookie assinado com HMAC, rate limit por IP em janela deslizante e SQLite puro Go (sem cgo, binário estático).`,
     `<b>Enrollment</b> — a web application that validates the staff member against the agency's official database and automatically links them to the facial watch list: HMAC-signed cookie session, sliding-window per-IP rate limiting, and pure-Go SQLite (no cgo, static binary).`,
     `<b>Registro</b>: aplicación web que valida al funcionario en la base oficial del organismo y lo vincula automáticamente a la watch list facial, con sesión por cookie firmada con HMAC, rate limit por IP en ventana deslizante y SQLite puro en Go (sin cgo, binario estático).`],
    [`<b>Devolução</b> — webhook que recebe os reconhecimentos da plataforma facial, descarta o que não é match e entrega ao sistema de gestão com token OAuth2 cacheado em Redis; falha transitória vai para retry com atraso, falha de validação vai direto para a fila morta.`,
     `<b>Return</b> — a webhook that receives recognitions from the facial platform, discards anything that is not a match, and delivers to the management system with an OAuth2 token cached in Redis; a transient failure goes to a delayed retry, a validation failure goes straight to the dead-letter queue.`,
     `<b>Devolución</b>: webhook que recibe los reconocimientos de la plataforma facial, descarta lo que no es un match y los entrega al sistema de gestión con un token OAuth2 cacheado en Redis; un fallo transitorio va a reintento con retraso y un fallo de validación va directo a la cola de mensajes fallidos.`],
    [`Escala por composição: vazão total = réplicas × concorrência, ajustada por variável de ambiente sem tocar no código.`,
     `Scaling by composition: total throughput = replicas × concurrency, tuned through an environment variable without touching the code.`,
     `Escala por composición: caudal total = réplicas × concurrencia, ajustado con una variable de entorno sin tocar el código.`],
    [`coletores & BI`, `collectors & BI`, `recolectores y BI`],
    [`reescrita Python → Go`, `Python → Go rewrite`, `reescritura Python → Go`],
    [`VisionSync — coletores de vigilância para BI`, `VisionSync — surveillance collectors for BI`, `VisionSync — recolectores de videovigilancia para BI`],
    [`Jobs em lote · APIs de videomonitoramento e facial → MySQL`, `Batch jobs · video-monitoring and facial APIs → MySQL`, `Jobs por lotes · APIs de videomonitoreo y facial → MySQL`],
    [`Família de coletores que materializa em MySQL os dados de plataformas de videomonitoramento e reconhecimento facial para consumo em BI, mais o serviço que consolida os indicadores de diretoria. Cada job executa, grava, registra o desfecho e sai — o agendamento é externo.`,
     `A family of collectors that materializes data from video-monitoring and facial recognition platforms into MySQL for BI consumption, plus the service that consolidates executive indicators. Each job runs, writes, records its outcome, and exits — scheduling is external.`,
     `Familia de recolectores que materializa en MySQL los datos de plataformas de videomonitoreo y reconocimiento facial para su consumo en BI, más el servicio que consolida los indicadores de dirección. Cada job se ejecuta, escribe, registra el resultado y termina; la programación es externa.`],
    [`<b>Disciplina de sessão</b>: uma sessão por execução, identificada por UUID derivado do nome do projeto, sessões órfãs podadas na inicialização e encerramento garantido no shutdown. Resolveu o acúmulo de sessões anônimas no servidor facial.`,
     `<b>Session discipline</b>: one session per run, identified by a UUID derived from the project name, orphaned sessions pruned at startup, and guaranteed closure on shutdown. It fixed the buildup of anonymous sessions on the facial server.`,
     `<b>Disciplina de sesión</b>: una sesión por ejecución, identificada por un UUID derivado del nombre del proyecto, sesiones huérfanas depuradas al iniciar y cierre garantizado en el shutdown. Resolvió la acumulación de sesiones anónimas en el servidor facial.`],
    [`<b>Configuração incompleta agora falha cedo</b>: a versão anterior autenticava com credencial vazia, recebia 401 e encerrava com código 0 — cron e orquestrador viam sucesso. Hoje a validação lista todos os problemas no boot e sai com código diferente de zero.`,
     `<b>Incomplete configuration now fails fast</b>: the previous version authenticated with an empty credential, got a 401, and exited with code 0 — cron and the orchestrator saw success. Today validation lists every problem at boot and exits with a non-zero code.`,
     `<b>La configuración incompleta ahora falla pronto</b>: la versión anterior se autenticaba con una credencial vacía, recibía un 401 y terminaba con código 0, por lo que cron y el orquestador veían éxito. Hoy la validación lista todos los problemas al arrancar y sale con un código distinto de cero.`],
    [`Token redigido em todo o pipeline de log e cache de token compartilhado entre execuções.`,
     `Token redacted across the whole logging pipeline, and a token cache shared between runs.`,
     `Token ofuscado en todo el pipeline de logs y caché de token compartida entre ejecuciones.`],
    [`<b>Consolidação de indicadores</b>: agregações anual, mensal e semanal por cliente executadas em paralelo com limite de concorrência, tabelas de histórico e carga incremental apenas do período corrente.`,
     `<b>Indicator consolidation</b>: yearly, monthly, and weekly per-client aggregations run in parallel with a concurrency limit, history tables, and incremental loading of the current period only.`,
     `<b>Consolidación de indicadores</b>: agregaciones anuales, mensuales y semanales por cliente ejecutadas en paralelo con límite de concurrencia, tablas de histórico y carga incremental solo del período en curso.`],
    [`APIs de VMS`, `VMS APIs`, `APIs de VMS`],
    [`APIs de reconhecimento facial`, `Facial recognition APIs`, `APIs de reconocimiento facial`],
    [`Fila em nuvem`, `Cloud queue`, `Cola en la nube`],
    [`orquestração de alertas`, `alert orchestration`, `orquestación de alertas`],
    [`envio bulk`, `bulk sending`, `envío masivo`],
    [`AlertMail — relatórios de alerta por e-mail`, `AlertMail — alert reports by email`, `AlertMail — informes de alertas por correo`],
    [`Serviço Go · MySQL → SMTP em conexão única`, `Go service · MySQL → SMTP over a single connection`, `Servicio Go · MySQL → SMTP en una única conexión`],
    [`Consolida os alertas de cada cliente a partir do MySQL e entrega relatórios em texto e HTML aos destinatários corretos, resolvendo grupo de usuários, destinatários padrão e duplicidades antes de enviar.`,
     `Consolidates each client's alerts from MySQL and delivers text and HTML reports to the right recipients, resolving user groups, default recipients, and duplicates before sending.`,
     `Consolida las alertas de cada cliente desde MySQL y entrega informes en texto y HTML a los destinatarios correctos, resolviendo grupos de usuarios, destinatarios predeterminados y duplicados antes de enviar.`],
    [`<b>Envio em bulk</b>: todas as mensagens saem por uma única conexão SMTP reutilizada, eliminando o handshake TLS por destinatário e derrubando o tempo total de entrega.`,
     `<b>Bulk sending</b>: all messages go out over a single reused SMTP connection, eliminating the per-recipient TLS handshake and cutting total delivery time.`,
     `<b>Envío masivo</b>: todos los mensajes salen por una única conexión SMTP reutilizada, eliminando el handshake TLS por destinatario y reduciendo el tiempo total de entrega.`],
    [`Validação de e-mail em duas camadas — sintaxe e <b>consulta MX com cache por domínio</b> — antes de gastar conexão com endereço inválido.`,
     `Two-layer email validation — syntax and <b>MX lookup cached per domain</b> — before spending a connection on an invalid address.`,
     `Validación de correo en dos capas (sintaxis y <b>consulta MX con caché por dominio</b>) antes de gastar una conexión en una dirección inválida.`],
    [`Deduplicação por destinatário: quem atende vários clientes recebe um relatório consolidado, não um e-mail por cliente.`,
     `Per-recipient deduplication: anyone who handles several clients gets one consolidated report, not one email per client.`,
     `Deduplicación por destinatario: quien atiende a varios clientes recibe un informe consolidado, no un correo por cliente.`],
    [`Agendamento recarregado a cada execução, cache de execuções em disco e API HTTP para forçar envio, consultar status e inspecionar o cache.`,
     `Schedule reloaded on every run, execution cache on disk, and an HTTP API to force a send, check status, and inspect the cache.`,
     `Programación recargada en cada ejecución, caché de ejecuciones en disco y API HTTP para forzar envíos, consultar el estado e inspeccionar la caché.`],
    [`Logger JSON estruturado com rotação própria por tamanho e fuso de São Paulo fixado.`,
     `Structured JSON logger with its own size-based rotation and a fixed São Paulo time zone.`,
     `Logger JSON estructurado con rotación propia por tamaño y zona horaria de São Paulo fija.`],
    [`Templates HTML`, `HTML templates`, `Plantillas HTML`],
    [`infra & automação`, `infra & automation`, `infra y automatización`],
    [`CronDock — agendador de containers`, `CronDock — container scheduler`, `CronDock — programador de contenedores`],
    [`API REST Go · execução única garantida por imagem`, `Go REST API · single execution guaranteed per image`, `API REST Go · ejecución única garantizada por imagen`],
    [`Serviço que agenda a execução de imagens Docker por intervalo ou expressão cron através de uma API REST, garantindo que nunca exista mais de uma instância da mesma imagem rodando ao mesmo tempo.`,
     `A service that schedules Docker image runs by interval or cron expression through a REST API, guaranteeing there is never more than one instance of the same image running at once.`,
     `Servicio que programa la ejecución de imágenes Docker por intervalo o expresión cron mediante una API REST, garantizando que nunca haya más de una instancia de la misma imagen corriendo al mismo tiempo.`],
    [`<b>Controle de instância única por imagem</b>: execução sobreposta é a causa clássica de um job de backup corromper o próprio resultado — aqui ela é impossível por construção.`,
     `<b>Single-instance control per image</b>: overlapping runs are the classic reason a backup job corrupts its own output — here they are impossible by construction.`,
     `<b>Control de instancia única por imagen</b>: la ejecución superpuesta es la causa clásica de que un job de backup corrompa su propio resultado; aquí es imposible por construcción.`],
    [`CRUD completo das tarefas via API REST, com persistência das agendas e recarga no boot.`,
     `Full CRUD for tasks via REST API, with persisted schedules reloaded at boot.`,
     `CRUD completo de las tareas vía API REST, con persistencia de las programaciones y recarga al arrancar.`],
    [`Dois modos de agendamento no mesmo modelo: intervalo em minutos (compatibilidade) e <b>expressão cron</b>, com o próximo disparo calculado e exposto na API.`,
     `Two scheduling modes in the same model: interval in minutes (for compatibility) and <b>cron expression</b>, with the next run computed and exposed in the API.`,
     `Dos modos de programación en el mismo modelo: intervalo en minutos (compatibilidad) y <b>expresión cron</b>, con el próximo disparo calculado y expuesto en la API.`],
    [`Acompanhamento do status dos containers em execução, health check e graceful shutdown.`,
     `Status tracking of running containers, health check, and graceful shutdown.`,
     `Seguimiento del estado de los contenedores en ejecución, health check y graceful shutdown.`],
    [`multicanal`, `multichannel`, `multicanal`],
    [`AlertHub — central de alertas multicanal`, `AlertHub — multichannel alert hub`, `AlertHub — central de alertas multicanal`],
    [`Plataforma onde se cadastra acesso de WhatsApp, e-mail e Telegram e se gera um endpoint. Esse endpoint é reutilizado em qualquer integração para disparar alertas de forma segura e rápida.`,
     `A platform where you register WhatsApp, email, and Telegram access and generate an endpoint. That endpoint is reused in any integration to trigger alerts securely and quickly.`,
     `Plataforma donde se registra el acceso de WhatsApp, correo y Telegram y se genera un endpoint. Ese endpoint se reutiliza en cualquier integración para disparar alertas de forma segura y rápida.`],
    [`auditoria`, `auditing`, `auditoría`],
    [`TraceOps — observabilidade fim a fim`, `TraceOps — end-to-end observability`, `TraceOps — observabilidad de extremo a extremo`],
    [`Camada de logs e alertas proativos: logs em JSON centralizados no Grafana, métricas no Prometheus e retenção temporária no ClickHouse. Alerta em tela do cliente (WebSocket) casado com alerta no WhatsApp — tudo auditável.`,
     `A layer for logs and proactive alerts: JSON logs centralized in Grafana, metrics in Prometheus, and temporary retention in ClickHouse. On-screen client alerts (WebSocket) paired with WhatsApp alerts — all auditable.`,
     `Capa de logs y alertas proactivas: logs en JSON centralizados en Grafana, métricas en Prometheus y retención temporal en ClickHouse. Alerta en la pantalla del cliente (WebSocket) combinado con alerta en WhatsApp; todo auditable.`],
    [`integrações`, `integrations`, `integraciones`],
    [`+200 entregues`, `+200 delivered`, `+200 entregados`],
    [`IntegraHub — integrações sob demanda`, `IntegraHub — on-demand integrations`, `IntegraHub — integraciones a demanda`],
    [`Mais de 50 integrações entregues, do micro ao macro: APIs externas, web scraping, mensageria e sincronização de bancos. Foco em relatórios web seguros e otimizados que automatizam o dia a dia.`,
     `More than 50 integrations delivered, from micro to macro: external APIs, web scraping, messaging, and database synchronization. Focused on secure, optimized web reports that automate daily work.`,
     `Más de 50 integraciones entregadas, de lo micro a lo macro: APIs externas, web scraping, mensajería y sincronización de bases de datos. Foco en reportes web seguros y optimizados que automatizan el día a día.`],
    [`EdgeLink — micro apps locais e hardware`, `EdgeLink — local micro apps and hardware`, `EdgeLink — micro apps locales y hardware`],
    [`Aplicativos que rodam localmente para diversos clientes, conectando hardware a softwares personalizados para controle e análise — a ponte entre o dispositivo físico e a inteligência do sistema.`,
     `Apps that run locally for various clients, connecting hardware to custom software for control and analysis — the bridge between the physical device and the system's intelligence.`,
     `Aplicaciones que corren localmente para diversos clientes, conectando hardware con software personalizado para control y análisis: el puente entre el dispositivo físico y la inteligencia del sistema.`],

    /* ---- atuação ---- */
    [`Frentes de trabalho, do produto à sustentação.`, `Areas of work, from product to support.`, `Frentes de trabajo, del producto al soporte.`],
    [`Produtos, projetos por cliente e rotinas internas em que atuo.`, `Products, per-client projects, and internal routines I work on.`, `Productos, proyectos por cliente y rutinas internas en los que trabajo.`],
    [`Participação no desenvolvimento das três versões da plataforma.`, `Took part in developing all three versions of the platform.`, `Participación en el desarrollo de las tres versiones de la plataforma.`],
    [`<b>3</b> versões`, `<b>3</b> versions`, `<b>3</b> versiones`],
    [`Aplicações de integração entregues por cliente e por versão, com dashboards de monitoramento.`, `Integration applications delivered per client and per version, with monitoring dashboards.`, `Aplicaciones de integración entregadas por cliente y por versión, con dashboards de monitoreo.`],
    [`<b>9</b> aplicações`, `<b>9</b> applications`, `<b>9</b> aplicaciones`],
    [`<b>6</b> clientes`, `<b>6</b> clients`, `<b>6</b> clientes`],
    [`Desenvolvimento e sustentação dos conectores de placas e faces, com evolução dos fluxos de processamento, do tratamento de mensagens e da confiabilidade das integrações.`,
     `Development and support of the license-plate and face connectors, evolving the processing flows, message handling, and integration reliability.`,
     `Desarrollo y soporte de los conectores de placas y rostros, con evolución de los flujos de procesamiento, del manejo de mensajes y de la confiabilidad de las integraciones.`],
    [`<b>3</b> aplicações`, `<b>3</b> applications`, `<b>3</b> aplicaciones`],
    [`<b>2</b> integradores de faces`, `<b>2</b> face integrators`, `<b>2</b> integradores de rostros`],
    [`SFTP`],
    [`Motor facial`, `Facial engine`, `Motor facial`],
    [`Orquestrador de alertas`, `Alert orchestrator`, `Orquestador de alertas`],
    [`Desenvolvimento e evolução do orquestrador, integrando os fluxos de processamento e a comunicação entre serviços.`,
     `Development and evolution of the orchestrator, tying together processing flows and service-to-service communication.`,
     `Desarrollo y evolución del orquestador, integrando los flujos de procesamiento y la comunicación entre servicios.`],
    [`Fluxos de processamento`, `Processing flows`, `Flujos de procesamiento`],
    [`Comunicação entre serviços`, `Service-to-service communication`, `Comunicación entre servicios`],
    [`Integrações externas e institucionais`, `External and institutional integrations`, `Integraciones externas e institucionales`],
    [`Integrações com órgãos e sistemas institucionais, do desenho dos endpoints ao envio de matches.`,
     `Integrations with agencies and institutional systems, from endpoint design to match delivery.`,
     `Integraciones con organismos y sistemas institucionales, desde el diseño de los endpoints hasta el envío de matches.`],
    [`<b>3</b> órgãos integrados`, `<b>3</b> agencies integrated`, `<b>3</b> organismos integrados`],
    [`<b>5</b> frentes de integração`, `<b>5</b> integration tracks`, `<b>5</b> frentes de integración`],
    [`Endpoints entre sistemas`, `Endpoints between systems`, `Endpoints entre sistemas`],
    [`Plataforma e infraestrutura de dados`, `Data platform and infrastructure`, `Plataforma e infraestructura de datos`],
    [`Banco de dados e integrador de dados para um órgão estadual, e plataforma de cadastro desenvolvida em dupla.`,
     `A database and a data integrator for a state agency, and a registration platform built as a pair.`,
     `Base de datos e integrador de datos para un organismo estatal, y plataforma de registro desarrollada en pareja.`],
    [`<b>3</b> entregas`, `<b>3</b> deliverables`, `<b>3</b> entregas`],
    [`Plataforma de cadastro`, `Registration platform`, `Plataforma de registro`],
    [`Banco de dados`, `Database`, `Base de datos`],
    [`Integrador de dados`, `Data integrator`, `Integrador de datos`],
    [`Dashboards e monitoramento`, `Dashboards and monitoring`, `Dashboards y monitoreo`],
    [`Apoio à criação das soluções de monitoramento dos clientes.`, `Support in building the clients' monitoring solutions.`, `Apoyo en la creación de las soluciones de monitoreo de los clientes.`],
    [`<b>2</b> soluções de monitoramento`, `<b>2</b> monitoring solutions`, `<b>2</b> soluciones de monitoreo`],
    [`Dashboards dos <b>9</b> projetos Data`, `Dashboards for the <b>9</b> Data projects`, `Dashboards de los <b>9</b> proyectos Data`],
    [`Provas de conceito`, `Proofs of concept`, `Pruebas de concepto`],
    [`Protótipos para validar a ideia antes de investir, alguns evoluídos para produção.`, `Prototypes to validate the idea before investing, some of which evolved into production.`, `Prototipos para validar la idea antes de invertir; algunos evolucionaron a producción.`],
    [`<b>4</b> provas de conceito`, `<b>4</b> proofs of concept`, `<b>4</b> pruebas de concepto`],
    [`<b>2</b> para clientes`, `<b>2</b> for clients`, `<b>2</b> para clientes`],
    [`Tempo real com SSE`, `Real time with SSE`, `Tiempo real con SSE`],
    [`Automações e integrações internas`, `Internal automations and integrations`, `Automatizaciones e integraciones internas`],
    [`Rotinas operacionais automatizadas e ferramentas para o time.`, `Automated operational routines and tools for the team.`, `Rutinas operativas automatizadas y herramientas para el equipo.`],
    [`Envio automático de e-mails`, `Automatic email sending`, `Envío automático de correos`],
    [`Integrações entre sistemas internos`, `Integrations between internal systems`, `Integraciones entre sistemas internos`],
    [`Automação de rotinas`, `Routine automation`, `Automatización de rutinas`],
    [`App interna de chamados para o Suporte`, `Internal ticketing app for Support`, `App interna de tickets para Soporte`],
    [`Sustentação e evolução`, `Support and evolution`, `Soporte y evolución`],
    [`contínuo`, `ongoing`, `continuo`],
    [`Correção, investigação e manutenção das aplicações em produção, com foco em confiabilidade e continuidade operacional.`,
     `Fixing, investigating, and maintaining production applications, focused on reliability and operational continuity.`,
     `Corrección, investigación y mantenimiento de las aplicaciones en producción, con foco en confiabilidad y continuidad operativa.`],
    [`Correção de erros`, `Bug fixing`, `Corrección de errores`],
    [`Investigação de problemas técnicos`, `Technical troubleshooting`, `Investigación de problemas técnicos`],
    [`Manutenção em produção`, `Production maintenance`, `Mantenimiento en producción`],
    [`Tratamento de falhas`, `Failure handling`, `Manejo de fallos`],
    [`Melhorias de confiabilidade`, `Reliability improvements`, `Mejoras de confiabilidad`],

    /* ---- método ---- */
    [`Como eu entrego: do commit à produção, sem atalho.`, `How I deliver: from commit to production, no shortcuts.`, `Cómo entrego: del commit a producción, sin atajos.`],
    [`Boas práticas que levo de projetos pequenos a plataformas completas: ambientes separados, pipelines automatizados, testes a cada mudança e comunicação sem surpresa.`,
     `Practices I bring from small projects to full platforms: separate environments, automated pipelines, tests on every change, and communication with no surprises.`,
     `Buenas prácticas que llevo de proyectos pequeños a plataformas completas: entornos separados, pipelines automatizados, pruebas en cada cambio y comunicación sin sorpresas.`],
    [`// fluxo de git · homologação antes de produção`, `// git workflow · acceptance before production`, `// flujo de git · validación antes de producción`],
    [`Caminho do código`, `The path of the code`, `El camino del código`],
    [`Cada mudança nasce em uma feature branch e entra em <b>develop</b> por <b>Pull Request</b>, com revisão e CI. A versão candidata é homologada e aprovada em <b>staging</b>, e o <b>mesmo artefato</b> segue para produção com tag de release. Correções urgentes seguem por <b>hotfix</b>.`,
     `Every change starts on a feature branch and enters <b>develop</b> through a <b>Pull Request</b>, with review and CI. The release candidate is accepted and approved in <b>staging</b>, and the <b>same artifact</b> goes to production with a release tag. Urgent fixes go through a <b>hotfix</b>.`,
     `Cada cambio nace en una feature branch y entra en <b>develop</b> mediante un <b>Pull Request</b>, con revisión y CI. La versión candidata se valida y aprueba en <b>staging</b>, y el <b>mismo artefacto</b> pasa a producción con una tag de release. Las correcciones urgentes siguen por <b>hotfix</b>.`],
    [`Caminho do código: feature, Pull Request, develop, staging, release, produção e hotfix`,
     `Code path: feature, Pull Request, develop, staging, release, production, and hotfix`,
     `Camino del código: feature, Pull Request, develop, staging, release, producción y hotfix`],
    [`Branches de feature entram em develop por Pull Request, com revisão e CI. De develop sai uma versão candidata para staging, onde há homologação e aprovação do responsável. Aprovada, a versão é promovida a main como o mesmo artefato, recebe uma tag de release e segue para produção pelo pipeline de deploy. Uma correção urgente parte da versão estável em uma branch hotfix, gera nova tag e volta para develop.`,
     `Feature branches enter develop through a Pull Request, with review and CI. From develop, a release candidate goes to staging, where acceptance testing and approval by the owner take place. Once approved, the version is promoted to main as the same artifact, gets a release tag, and goes to production through the deploy pipeline. An urgent fix starts from the stable version on a hotfix branch, produces a new tag, and flows back into develop.`,
     `Las ramas de feature entran en develop mediante Pull Request, con revisión y CI. Desde develop sale una versión candidata hacia staging, donde hay validación y aprobación del responsable. Una vez aprobada, la versión se promueve a main como el mismo artefacto, recibe una tag de release y pasa a producción por el pipeline de deploy. Una corrección urgente parte de la versión estable en una rama hotfix, genera una nueva tag y vuelve a develop.`],
    [`homologação`, `acceptance`, `validación`],
    [`PR + CI ✓`],
    [`✓ aprovação`, `✓ approval`, `✓ aprobación`],
    [`mesmo artefato`, `same artifact`, `mismo artefacto`],
    [`tag vX.Y.Z`],
    [`deploy`],
    [`correção urgente`, `urgent fix`, `corrección urgente`],
    [`nova tag`, `new tag`, `nueva tag`],
    [`volta para develop`, `merged back to develop`, `vuelve a develop`],
    [`tempo →`, `time →`, `tiempo →`],
    [`// deslize para ver o fluxo completo →`, `// swipe to see the full flow →`, `// desliza para ver el flujo completo →`],
    [`desenvolvimento isolado`, `isolated development`, `desarrollo aislado`],
    [`Implementação e testes locais em uma branch curta, com escopo claro.`, `Implementation and local tests on a short-lived branch with a clear scope.`, `Implementación y pruebas locales en una rama corta, con alcance claro.`],
    [`revisão e CI`, `review and CI`, `revisión y CI`],
    [`Revisão de código, análise estática e testes automatizados antes do merge.`, `Code review, static analysis, and automated tests before the merge.`, `Revisión de código, análisis estático y pruebas automatizadas antes del merge.`],
    [`homologação e aprovação`, `acceptance and approval`, `validación y aprobación`],
    [`Deploy automatizado e testes de integração. Validação funcional e aprovação do responsável antes de seguir.`,
     `Automated deploy and integration tests. Functional validation and sign-off by the owner before moving on.`,
     `Deploy automatizado y pruebas de integración. Validación funcional y aprobación del responsable antes de continuar.`],
    [`versão imutável`, `immutable version`, `versión inmutable`],
    [`Tag no commit liberado. O mesmo artefato homologado, uma imagem Docker versionada, é promovido sem recompilar.`,
     `Tag on the released commit. The same accepted artifact, a versioned Docker image, is promoted without rebuilding.`,
     `Tag en el commit liberado. El mismo artefacto validado, una imagen Docker versionada, se promueve sin recompilar.`],
    [`deploy e retorno`, `deploy and rollback`, `deploy y vuelta atrás`],
    [`Deploy automatizado, verificação pós-deploy e monitoramento, com rollback para a versão anterior.`,
     `Automated deploy, post-deploy checks, and monitoring, with rollback to the previous version.`,
     `Deploy automatizado, verificación posdeploy y monitoreo, con rollback a la versión anterior.`],
    [`Parte da versão estável: correção, testes e nova release. Volta para develop para não divergir.`,
     `Starts from the stable version: fix, tests, and a new release. Merged back into develop to avoid divergence.`,
     `Parte de la versión estable: corrección, pruebas y nueva release. Vuelve a develop para no divergir.`],
    [`// o fluxo se adapta ao projeto: com homologação formal, Git flow simplificado; com CI forte e releases frequentes, trunk-based com branches curtas.`,
     `// the flow adapts to the project: with formal acceptance testing, simplified Git flow; with strong CI and frequent releases, trunk-based with short-lived branches.`,
     `// el flujo se adapta al proyecto: con validación formal, Git flow simplificado; con CI sólido y releases frecuentes, trunk-based con ramas cortas.`],
    [`práticas no dia a dia`, `day-to-day practices`, `prácticas del día a día`],
    [`Pipelines automatizados`, `Automated pipelines`, `Pipelines automatizados`],
    [`<b>Build, testes e empacotamento</b> em Docker a cada Pull Request.`, `<b>Build, tests, and Docker packaging</b> on every Pull Request.`, `<b>Build, pruebas y empaquetado</b> en Docker en cada Pull Request.`],
    [`<b>Mesmo artefato</b> promovido da homologação à produção, sem recompilar.`, `<b>Same artifact</b> promoted from acceptance to production, without rebuilding.`, `<b>Mismo artefacto</b> promovido de validación a producción, sin recompilar.`],
    [`Release por tag versionada e deploy automatizado.`, `Releases by versioned tag and automated deploy.`, `Release por tag versionada y deploy automatizado.`],
    [`Testes e análise estática no Pull Request; testes de integração em homologação.`, `Tests and static analysis on the Pull Request; integration tests in acceptance.`, `Pruebas y análisis estático en el Pull Request; pruebas de integración en validación.`],
    [`<b>Falha cedo</b>: configuração inválida derruba o boot, não a produção.`, `<b>Fail fast</b>: an invalid configuration breaks the boot, not production.`, `<b>Falla pronto</b>: una configuración inválida rompe el arranque, no la producción.`],
    [`Menos regressão chegando ao cliente.`, `Fewer regressions reaching the client.`, `Menos regresiones llegando al cliente.`],
    [`Gestão de projetos, do pequeno ao grande`, `Project management, from small to large`, `Gestión de proyectos, de lo pequeño a lo grande`],
    [`Do micro app local a plataformas com <b>várias versões e clientes</b>.`, `From a local micro app to platforms with <b>multiple versions and clients</b>.`, `De una micro app local a plataformas con <b>varias versiones y clientes</b>.`],
    [`Escopo dividido em entregas incrementais.`, `Scope split into incremental deliveries.`, `Alcance dividido en entregas incrementales.`],
    [`Acompanhamento do desenvolvimento à sustentação.`, `Follow-through from development to support.`, `Seguimiento del desarrollo al soporte.`],
    [`Comunicação proativa e transparente`, `Proactive, transparent communication`, `Comunicación proactiva y transparente`],
    [`Status, riscos e prazos avisados <b>antes de virarem problema</b>.`, `Status, risks, and deadlines flagged <b>before they become problems</b>.`, `Estado, riesgos y plazos avisados <b>antes de que se conviertan en problema</b>.`],
    [`Reuniões técnicas para alinhar requisitos e esclarecer dúvidas.`, `Technical meetings to align on requirements and answer questions.`, `Reuniones técnicas para alinear requisitos y aclarar dudas.`],
    [`Apresentação das funcionalidades e soluções entregues ao cliente.`, `Walkthroughs of the features and solutions delivered to the client.`, `Presentación de las funcionalidades y soluciones entregadas al cliente.`],
    [`Colaboração técnica`, `Technical collaboration`, `Colaboración técnica`],
    [`Apoio técnico aos demais desenvolvedores.`, `Technical support for fellow developers.`, `Apoyo técnico a los demás desarrolladores.`],
    [`Análise conjunta de problemas e integração entre sistemas.`, `Joint problem analysis and system integration.`, `Análisis conjunto de problemas e integración entre sistemas.`],
    [`Evolução das práticas de Git e de versionamento.`, `Evolving Git and versioning practices.`, `Evolución de las prácticas de Git y de versionado.`],
    [`Confiabilidade em produção`, `Production reliability`, `Confiabilidad en producción`],
    [`<b>Retry, dead-letter e circuit breaker</b> nas integrações.`, `<b>Retry, dead-letter, and circuit breaker</b> on integrations.`, `<b>Retry, dead-letter y circuit breaker</b> en las integraciones.`],
    [`Logs JSON e alertas proativos no Grafana.`, `JSON logs and proactive alerts in Grafana.`, `Logs JSON y alertas proactivas en Grafana.`],
    [`Monitoramento pós-deploy e rollback para a versão anterior.`, `Post-deploy monitoring and rollback to the previous version.`, `Monitoreo posdeploy y rollback a la versión anterior.`],

    /* ---- clientes ---- */
    [`Entregas para o setor público e privado.`, `Deliveries for the public and private sectors.`, `Entregas para el sector público y privado.`],
    [`Sistemas de missão crítica, com requisitos reais de segurança, escala e disponibilidade.`, `Mission-critical systems with real security, scale, and availability requirements.`, `Sistemas de misión crítica, con requisitos reales de seguridad, escala y disponibilidad.`],
    [`Polícia Rodoviária Federal`, `Federal Highway Police`, `Policía Rodoviaria Federal`],
    [`setor público federal`, `federal public sector`, `sector público federal`],
    [`Polícia Militar do RS`, `Military Police of RS`, `Policía Militar de RS`],
    [`segurança pública`, `public safety`, `seguridad pública`],
    [`PROCERGS`], [`SEDUC`],
    [`TI do Estado do RS`, `IT agency of the State of RS`, `TI del Estado de RS`],
    [`educação — RS`, `education — RS`, `educación — RS`],
    [`Setor privado`, `Private sector`, `Sector privado`],
    [`diversos clientes`, `various clients`, `diversos clientes`],
    [`// entre outros diversos clientes públicos e privados.`, `// among many other public and private clients.`, `// entre muchos otros clientes públicos y privados.`],

    /* ---- trajetória ---- */
    [`Do estágio à liderança técnica de produto.`, `From intern to technical product leadership.`, `De pasante a liderazgo técnico de producto.`],
    [`mar 2024 — atual`, `Mar 2024 — present`, `mar 2024 — actual`],
    [`Desenvolvedor Back-End Pleno`, `Mid-level Back-End Developer`, `Desarrollador Back-End Semi Senior`],
    [`DGT Tecnologia · Estância Velha, RS`],
    [`Desenvolvimento back-end de sistemas orientados a eventos em Go e Python, com integrações, mensageria e automação. Atuação também em DevOps (Docker, Kubernetes) e front-end conforme a necessidade. Entrega com Git flow, pipelines CI/CD e testes automatizados, apoia tecnicamente o time e participa de reuniões técnicas com clientes.`,
     `Back-end development of event-driven systems in Go and Python, with integrations, messaging, and automation. Also works in DevOps (Docker, Kubernetes) and front end as needed. Delivers with Git flow, CI/CD pipelines, and automated tests, supports the team technically, and joins technical meetings with clients.`,
     `Desarrollo back-end de sistemas orientados a eventos en Go y Python, con integraciones, mensajería y automatización. También actúa en DevOps (Docker, Kubernetes) y front-end según la necesidad. Entrega con Git flow, pipelines CI/CD y pruebas automatizadas, apoya técnicamente al equipo y participa en reuniones técnicas con clientes.`],
    [`mai 2023 — mar 2024`, `May 2023 — Mar 2024`, `may 2023 — mar 2024`],
    [`Analista de Desenvolvimento de Sistema Pleno`, `Mid-level Systems Development Analyst`, `Analista de Desarrollo de Sistemas Semi Senior`],
    [`Integrações de API, automação de dados e tarefas, containerização com Docker/Portainer, filas de mensagens e arquitetura de banco de dados.`,
     `API integrations, data and task automation, containerization with Docker/Portainer, message queues, and database architecture.`,
     `Integraciones de API, automatización de datos y tareas, contenerización con Docker/Portainer, colas de mensajes y arquitectura de bases de datos.`],
    [`out 2022 — mai 2023`, `Oct 2022 — May 2023`, `oct 2022 — may 2023`],
    [`Analista de Sistema Júnior`, `Junior Systems Analyst`, `Analista de Sistemas Junior`],
    [`Desenvolvimento, documentação técnica, automação de processos, integração de sistemas (APIs) e suporte à equipe de implantação.`,
     `Development, technical documentation, process automation, systems integration (APIs), and support for the deployment team.`,
     `Desarrollo, documentación técnica, automatización de procesos, integración de sistemas (APIs) y soporte al equipo de implantación.`],
    [`out 2021 — mai 2022`, `Oct 2021 — May 2022`, `oct 2021 — may 2022`],
    [`Estágio — Programação CNC / Data Science`, `Internship — CNC Programming / Data Science`, `Pasantía — Programación CNC / Data Science`],
    [`TK Elevator · Guaíba, RS`],
    [`Automação de tarefas (Python, VBA, SAP, Power BI), gestão de bancos de dados e processos automatizados de alto nível (microsserviços).`,
     `Task automation (Python, VBA, SAP, Power BI), database management, and high-level automated processes (microservices).`,
     `Automatización de tareas (Python, VBA, SAP, Power BI), gestión de bases de datos y procesos automatizados de alto nivel (microservicios).`],

    /* ---- contato + rodapé ---- */
    [`Vamos construir algo que escala.`, `Let's build something that scales.`, `Construyamos algo que escale.`],
    [`Precisa integrar sistemas, processar dados em tempo real ou tirar uma ideia do papel? Me chama.`,
     `Need to integrate systems, process data in real time, or turn an idea into reality? Get in touch.`,
     `¿Necesitas integrar sistemas, procesar datos en tiempo real o sacar una idea del papel? Escríbeme.`],
    [`e-mail`, `email`, `correo`],
    [`WhatsApp`], [`LinkedIn`],
    [`Currículo (PDF)`, `Resume (PDF)`, `Currículum (PDF)`],
    [`Lucas dos Santos Costa · Desenvolvedor Back-End`, `Lucas dos Santos Costa · Back-End Developer`, `Lucas dos Santos Costa · Desarrollador Back-End`],
    [`construído em HTML + CSS · sem dependências ·`, `built with HTML + CSS · no dependencies ·`, `construido con HTML + CSS · sin dependencias ·`],

    /* =============== currículo (curriculo.html) =============== */
    [`Currículo — Lucas dos Santos Costa`, `Resume — Lucas dos Santos Costa`, `Currículum — Lucas dos Santos Costa`],
    [`Currículo profissional de Lucas dos Santos Costa — Desenvolvedor Back-End (Go · Python).`, `Professional resume of Lucas dos Santos Costa — Back-End Developer (Go · Python).`, `Currículum profesional de Lucas dos Santos Costa — Desarrollador Back-End (Go · Python).`],
    [`← portfólio`, `← portfolio`, `← portafolio`],
    [`Baixar PDF`, `Download PDF`, `Descargar PDF`],
    [`Desenvolvedor Back-End Pleno · Go & Python`, `Mid-level Back-End Developer · Go & Python`, `Desarrollador Back-End Semi Senior · Go y Python`],
    [`Estância Velha / Porto Alegre — RS`],
    [`Competências`, `Skills`, `Competencias`],
    [`Linguagens`, `Languages`, `Lenguajes`],
    [`Mensageria & tempo real`, `Messaging & real time`, `Mensajería y tiempo real`],
    [`DevOps, cloud & entrega`, `DevOps, cloud & delivery`, `DevOps, cloud y entrega`],
    [`Deploy, hosting & domínios`, `Deploy, hosting & domains`, `Deploy, hosting y dominios`],
    [`Observabilidade`, `Observability`, `Observabilidad`],
    [`Bancos de dados`, `Databases`, `Bases de datos`],
    [`Dados, BI & IA`, `Data, BI & AI`, `Datos, BI e IA`],
    [`Formação`, `Education`, `Formación`],
    [`Pós — Ciência de Dados e IA`, `Postgraduate — Data Science and AI`, `Posgrado — Ciencia de Datos e IA`],
    [`Pós — Business Intelligence & Analytics`, `Postgraduate — Business Intelligence & Analytics`, `Posgrado — Business Intelligence & Analytics`],
    [`Graduação — Eng. de Energia`, `Bachelor's — Energy Engineering`, `Grado — Ing. de Energía`],
    [`Tecnólogo — Análise e Desenv. de Sistemas`, `Associate degree — Systems Analysis & Development`, `Tecnólogo — Análisis y Desarrollo de Sistemas`],
    [`Líbano — São Paulo, SP`], [`UniRitter — Porto Alegre, RS`], [`UERGS — Porto Alegre, RS`], [`QI — Porto Alegre, RS`],
    [`2025 – 2026 · concluído`, `2025 – 2026 · completed`, `2025 – 2026 · concluido`],
    [`2019 – 2023 · concluído`, `2019 – 2023 · completed`, `2019 – 2023 · concluido`],
    [`2018 – 2024 · concluído`, `2018 – 2024 · completed`, `2018 – 2024 · concluido`],
    [`2018 – 2020 · concluído`, `2018 – 2020 · completed`, `2018 – 2020 · concluido`],
    [`Idiomas`, `Languages`, `Idiomas`],
    [`Português`, `Portuguese`, `Portugués`],
    [`Inglês`, `English`, `Inglés`],
    [`nativo`, `native`, `nativo`],
    [`técnico / leitura`, `technical / reading`, `técnico / lectura`],
    [`Resumo profissional`, `Professional summary`, `Resumen profesional`],
    [`Desenvolvedor back-end com foco em <b>sistemas orientados a eventos</b>, <b>integrações de alta escala</b> e <b>processamento de dados em tempo real</b>. Já entreguei <b>mais de 50 integrações</b> — de rotinas simples do dia a dia a plataformas completas — construídas majoritariamente em <b>Go</b>, com <b>Python</b> para análise de dados intensiva. Sólido em mensageria, observabilidade (Grafana · Prometheus), reconhecimento facial em tempo real e microsserviços. Entrego com <b>Git flow</b> (develop · staging · main), <b>pipelines CI/CD</b> e <b>testes automatizados</b>, e conduzo projetos de pequeno a grande porte com <b>comunicação proativa e transparente</b>. <b>Back-end é meu foco principal</b>, mas atuo também em <b>DevOps</b> (Docker · Kubernetes) e <b>front-end</b> conforme a necessidade. Atendimento a clientes públicos e privados de grande porte, com requisitos reais de segurança e escala.`,
     `Back-end developer focused on <b>event-driven systems</b>, <b>high-scale integrations</b>, and <b>real-time data processing</b>. I have delivered <b>more than 50 integrations</b> — from simple day-to-day routines to complete platforms — built mostly in <b>Go</b>, with <b>Python</b> for intensive data analysis. Strong in messaging, observability (Grafana · Prometheus), real-time facial recognition, and microservices. I deliver with <b>Git flow</b> (develop · staging · main), <b>CI/CD pipelines</b>, and <b>automated tests</b>, and I run projects from small to large with <b>proactive, transparent communication</b>. <b>Back end is my main focus</b>, but I also work in <b>DevOps</b> (Docker · Kubernetes) and <b>front end</b> as needed. Serving large public and private clients with real security and scale requirements.`,
     `Desarrollador back-end enfocado en <b>sistemas orientados a eventos</b>, <b>integraciones de alta escala</b> y <b>procesamiento de datos en tiempo real</b>. He entregado <b>más de 50 integraciones</b> — desde rutinas simples del día a día hasta plataformas completas — construidas mayormente en <b>Go</b>, con <b>Python</b> para análisis de datos intensivo. Sólido en mensajería, observabilidad (Grafana · Prometheus), reconocimiento facial en tiempo real y microservicios. Entrego con <b>Git flow</b> (develop · staging · main), <b>pipelines CI/CD</b> y <b>pruebas automatizadas</b>, y conduzco proyectos de pequeño a gran porte con <b>comunicación proactiva y transparente</b>. <b>El back-end es mi foco principal</b>, pero también actúo en <b>DevOps</b> (Docker · Kubernetes) y <b>front-end</b> según la necesidad. Atención a clientes públicos y privados de gran porte, con requisitos reales de seguridad y escala.`],
    [`Experiência`, `Experience`, `Experiencia`],
    [`DGT Tecnologia Ltda`], [`Estância Velha, RS`], [`Novo Hamburgo, RS`], [`TK Elevator`], [`Guaíba, RS`],
    [`mar/2024 – atual`, `Mar/2024 – present`, `mar/2024 – actual`],
    [`mai/2023 – mar/2024`, `May/2023 – Mar/2024`, `may/2023 – mar/2024`],
    [`out/2022 – mai/2023`, `Oct/2022 – May/2023`, `oct/2022 – may/2023`],
    [`mar/2021 – mai/2022`, `Mar/2021 – May/2022`, `mar/2021 – may/2022`],
    [`<b>Sustentação e evolução contínua</b> de sistemas em produção, com correção de falhas e melhorias de confiabilidade.`,
     `<b>Ongoing support and evolution</b> of production systems, with bug fixes and reliability improvements.`,
     `<b>Soporte y evolución continuos</b> de sistemas en producción, con corrección de fallos y mejoras de confiabilidad.`],
    [`Desenvolvimento back-end de <b>sistemas orientados a eventos em Go</b>, com mensageria (RabbitMQ/MQTT) e integrações de API.`,
     `Back-end development of <b>event-driven systems in Go</b>, with messaging (RabbitMQ/MQTT) and API integrations.`,
     `Desarrollo back-end de <b>sistemas orientados a eventos en Go</b>, con mensajería (RabbitMQ/MQTT) e integraciones de API.`],
    [`Pipelines de <b>processamento de imagem e reconhecimento facial em tempo real</b>, com foco em performance e escala.`,
     `<b>Image processing and real-time facial recognition</b> pipelines, focused on performance and scale.`,
     `Pipelines de <b>procesamiento de imágenes y reconocimiento facial en tiempo real</b>, con foco en rendimiento y escala.`],
    [`Plataformas de <b>dados self-service</b> e <b>alertas multicanal</b>, expostas de forma segura via API.`,
     `<b>Self-service data</b> and <b>multichannel alert</b> platforms, securely exposed via API.`,
     `Plataformas de <b>datos self-service</b> y <b>alertas multicanal</b>, expuestas de forma segura vía API.`],
    [`Evolução e sustentação das aplicações <b>Connect</b> (placas e faces), do <b>orquestrador de alertas</b> e de integrações com <b>órgãos públicos federais, estaduais e municipais</b>.`,
     `Evolution and support of the <b>Connect</b> applications (license plates and faces), the <b>alert orchestrator</b>, and integrations with <b>federal, state, and municipal public agencies</b>.`,
     `Evolución y soporte de las aplicaciones <b>Connect</b> (placas y rostros), del <b>orquestador de alertas</b> y de integraciones con <b>organismos públicos federales, estatales y municipales</b>.`],
    [`Entrega com <b>Git flow</b>, <b>pipelines CI/CD</b>, <b>testes automatizados</b> e homologação; reuniões técnicas com clientes e apoio aos demais desenvolvedores.`,
     `Delivery with <b>Git flow</b>, <b>CI/CD pipelines</b>, <b>automated tests</b>, and acceptance testing; technical meetings with clients and support for fellow developers.`,
     `Entrega con <b>Git flow</b>, <b>pipelines CI/CD</b>, <b>pruebas automatizadas</b> y validación; reuniones técnicas con clientes y apoyo a los demás desarrolladores.`],
    [`Atuação em <b>DevOps</b> (Docker · Kubernetes) e observabilidade, além de <b>front-end</b> conforme a necessidade.`,
     `Work in <b>DevOps</b> (Docker · Kubernetes) and observability, plus <b>front end</b> as needed.`,
     `Actuación en <b>DevOps</b> (Docker · Kubernetes) y observabilidad, además de <b>front-end</b> según la necesidad.`],
    [`Desenvolvimento de software e <b>integrações de API</b>, automação de dados e de tarefas.`,
     `Software development and <b>API integrations</b>, data and task automation.`,
     `Desarrollo de software e <b>integraciones de API</b>, automatización de datos y de tareas.`],
    [`Containerização com <b>Docker/Portainer</b>, filas de mensagens e arquitetura de banco de dados.`,
     `Containerization with <b>Docker/Portainer</b>, message queues, and database architecture.`,
     `Contenerización con <b>Docker/Portainer</b>, colas de mensajes y arquitectura de bases de datos.`],
    [`Gestão de logs, alertas proativos e ambientes virtualizados / de teste.`,
     `Log management, proactive alerts, and virtualized / test environments.`,
     `Gestión de logs, alertas proactivas y entornos virtualizados / de prueba.`],
    [`Desenvolvimento, <b>automação de processos</b> e integração de sistemas (APIs).`,
     `Development, <b>process automation</b>, and systems integration (APIs).`,
     `Desarrollo, <b>automatización de procesos</b> e integración de sistemas (APIs).`],
    [`Documentação técnica, criação de fluxogramas, relatórios e suporte à equipe de implantação.`,
     `Technical documentation, flowcharts, reports, and support for the deployment team.`,
     `Documentación técnica, creación de flujogramas, informes y soporte al equipo de implantación.`],
    [`Estágio — Programação CNC e Data Science`, `Internship — CNC Programming and Data Science`, `Pasantía — Programación CNC y Data Science`],
    [`<b>Automação de tarefas</b> (Python, VBA, SAP, Power BI) e gestão de bancos de dados.`,
     `<b>Task automation</b> (Python, VBA, SAP, Power BI) and database management.`,
     `<b>Automatización de tareas</b> (Python, VBA, SAP, Power BI) y gestión de bases de datos.`],
    [`Criação e execução de <b>processos automatizados de alto nível (microsserviços)</b> e apoio a desenhos técnicos (SolidWorks, AutoCAD, Inventor).`,
     `Building and running <b>high-level automated processes (microservices)</b> and support for technical drawings (SolidWorks, AutoCAD, Inventor).`,
     `Creación y ejecución de <b>procesos automatizados de alto nivel (microservicios)</b> y apoyo a dibujos técnicos (SolidWorks, AutoCAD, Inventor).`],
    [`Realizações em destaque`, `Key achievements`, `Logros destacados`],
    [`API em <b>Go</b> que integra múltiplos bancos de dados com segurança, gerando relatórios e dashboards dinâmicos.`,
     `A <b>Go</b> API that securely integrates multiple databases, generating dynamic reports and dashboards.`,
     `API en <b>Go</b> que integra múltiples bases de datos con seguridad, generando reportes y dashboards dinámicos.`],
    [`Sistema inteligente de monitoramento que integra <b>reconhecimento facial e de veículos</b> com microsserviços em Python e Go.`,
     `An intelligent monitoring system that integrates <b>facial and vehicle recognition</b> with Python and Go microservices.`,
     `Sistema inteligente de monitoreo que integra <b>reconocimiento facial y de vehículos</b> con microservicios en Python y Go.`],
    [`Integração e automação de bancos de dados via APIs e <b>web scraping</b>, com foco em relatórios web seguros e otimizados.`,
     `Database integration and automation via APIs and <b>web scraping</b>, focused on secure, optimized web reports.`,
     `Integración y automatización de bases de datos vía APIs y <b>web scraping</b>, con foco en reportes web seguros y optimizados.`],
    [`Automações que conectam <b>hardware a softwares personalizados</b> para controle e análise em campo.`,
     `Automations that connect <b>hardware to custom software</b> for control and analysis in the field.`,
     `Automatizaciones que conectan <b>hardware con software personalizado</b> para control y análisis en campo.`],
    [`Dica: clique em <b>Baixar PDF</b> → na janela de impressão escolha <b>“Salvar como PDF”</b> e defina margens padrão / A4.`,
     `Tip: click <b>Download PDF</b> → in the print dialog choose <b>“Save as PDF”</b> and set default margins / A4.`,
     `Consejo: haz clic en <b>Descargar PDF</b> → en la ventana de impresión elige <b>“Guardar como PDF”</b> y define márgenes estándar / A4.`]
  ];

  var MAP = { en: {}, es: {} };
  function norm(s) { return String(s).replace(/\s+/g, ' ').trim(); }
  ROWS.forEach(function (r) {
    var k = norm(r[0]);
    MAP.en[k] = r.length > 1 ? r[1] : r[0];
    MAP.es[k] = r.length > 2 ? r[2] : (r.length > 1 ? r[1] : r[0]);
  });

  /* ---------------- estado ---------------- */
  function readLang() {
    var q = null;
    try { q = new URLSearchParams(location.search).get('lang'); } catch (e) {}
    if (q && LANGS.indexOf(q) > -1) { save(q); return q; }
    var s = null;
    try { s = localStorage.getItem('lang'); } catch (e) {}
    return (s && LANGS.indexOf(s) > -1) ? s : 'pt';
  }
  function save(l) { try { localStorage.setItem('lang', l); } catch (e) {} }

  var lang = readLang();
  var miss = {};
  var listeners = [];

  /* traduz uma string em português (aceita HTML inline) */
  function T(pt) {
    if (lang === 'pt' || pt == null) return pt;
    var k = norm(pt);
    var v = MAP[lang][k];
    if (v === undefined) { miss[k] = 1; return pt; }
    return v;
  }

  /* ---------------- texto estático ---------------- */
  var origText = new WeakMap();   // nó de texto -> texto original (pt)
  var origHtml = new WeakMap();   // elemento [data-i18n] -> innerHTML original (pt)
  var origAttr = new WeakMap();   // elemento -> { atributo: valor original (pt) }
  var origHead = null;

  function walk(root) {
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-i18n],[data-i18n-skip]')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (tw.nextNode()) nodes.push(tw.currentNode);
    nodes.forEach(function (n) {
      if (!origText.has(n)) origText.set(n, n.nodeValue);
      var raw = origText.get(n), core = norm(raw);
      if (!core) return;
      if (lang === 'pt') { if (n.nodeValue !== raw) n.nodeValue = raw; return; }
      var v = MAP[lang][core];
      if (v === undefined) { miss[core] = 1; if (n.nodeValue !== raw) n.nodeValue = raw; return; }
      n.nodeValue = raw.match(/^\s*/)[0] + v + raw.match(/\s*$/)[0];
    });
  }

  /* blocos com marcação interna: <p data-i18n>…<b>…</b>…</p> */
  function rich(root) {
    root.querySelectorAll('[data-i18n]').forEach(function (el) {
      if (!origHtml.has(el)) origHtml.set(el, el.innerHTML);
      var raw = origHtml.get(el);
      if (lang === 'pt') { el.innerHTML = raw; return; }
      var v = MAP[lang][norm(raw)];
      if (v === undefined) { miss[norm(raw)] = 1; el.innerHTML = raw; return; }
      el.innerHTML = v;
    });
  }

  /* atributos: <button data-i18n-attr="aria-label,title"> */
  function attrs(root) {
    root.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      var store = origAttr.get(el);
      if (!store) { store = {}; origAttr.set(el, store); }
      el.getAttribute('data-i18n-attr').split(',').forEach(function (a) {
        a = a.trim();
        if (!(a in store)) store[a] = el.getAttribute(a) || '';
        var raw = store[a];
        if (lang === 'pt') { el.setAttribute(a, raw); return; }
        var v = MAP[lang][norm(raw)];
        if (v === undefined) { miss[norm(raw)] = 1; el.setAttribute(a, raw); return; }
        el.setAttribute(a, v);
      });
    });
  }

  function head() {
    if (!origHead) origHead = { title: document.title };
    document.title = lang === 'pt' ? origHead.title : T(origHead.title);
    document.documentElement.lang = HTML_LANG[lang];
  }

  function paintSwitch() {
    document.querySelectorAll('.lang button').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  function apply(initial) {
    head();
    if (!initial) listeners.forEach(function (f) { f(lang); });   // re-renderiza o conteúdo montado por JS
    rich(document);
    walk(document.body);
    attrs(document);
    paintSwitch();
  }

  function set(l) {
    if (LANGS.indexOf(l) < 0 || l === lang) return;
    lang = l; save(l); apply(false);
  }

  function start() {
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { set(b.getAttribute('data-lang')); });
    });
    apply(true);
  }

  window.I18N = {
    t: T,
    lang: function () { return lang; },
    set: set,
    start: start,
    onChange: function (fn) { listeners.push(fn); },
    missing: function () { var k = Object.keys(miss); console.log(k.length + ' textos sem tradução em "' + lang + '":'); console.log(k.join('\n')); return k; }
  };
})();
