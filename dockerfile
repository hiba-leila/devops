

# Utiliser une image officielle de Node.js comme image parent
FROM node:14

# Définir le répertoire de travail à /app
WORKDIR /app

# Copier le fichier package.json et le fichier package-lock.json dans le conteneur
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Exposer le port 8080
EXPOSE 8080

# Démarrer l'application JavaScript avec Node.js
CMD ["node", "index.js"]