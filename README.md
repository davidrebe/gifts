En este proyecto he dividido cada funcionalidad en una carpeta diferente: - store: contiene un archivo con la creación de la store de redux combinando los diferentes reducers. - actions: cada funcionalidad (Gifts, Usuario o Iniciar sesión) dentro del proyecto tiene sus propias acciones en un fichero diferente. - reducers: cada funcionalidad (Gifts, Usuario o Iniciar sesión) dentro del proyecto tiene sus propios reductores. - sagas: contiene el archivo gift-sagas.js para controlar los side-effects de la llamada a la api GIPHY. - gateways: contiene el archivo gift-sagas.js para realizar la llamada a la api. - utils: contiene un fichero para utilidades con arrays. - components: - presentational: son componentes de presentación, no están conectados al estado directamente, reciben props y renderizan. - functional: tienen funcionalidad concreta y están conectados al estado para realizar modificaciones. - pages: corresponden con las diferentes páginas dentro de l proyecto.
