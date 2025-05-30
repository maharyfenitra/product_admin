# 🛠️ Admin Dashboard Frontend

Ce projet est une interface d'administration développée avec **React 19**, **Vite**, **TypeScript**, et **React Query**. Il est conçu pour interagir avec une API backend Express.

---

## 🚀 Démarrage rapide

### 1. Installation des dépendances

```bash
pnpm install
# ou
npm install
# ou
yarn install
```

### 2. Lancer l'application en développement

```bash
pnpm dev
# ou
npm run dev
```

### 3. Build de production

```bash
pnpm build
```

### 4. Prévisualisation du build

```bash
pnpm preview
```

---

## 📦 Stack technique

- **React 19**
- **TypeScript**
- **Vite**
- **React Query** (gestion de l’état serveur)
- **Axios** (requêtes HTTP)
- **ESLint** (linting)

---

## 📁 Structure principale

```bash
src/
├── components/         # Composants réutilisables (ex: ProductPanel)
├── hooks/              # Hooks personnalisés (ex: useDashboard)
├── services/           # Appels API avec axios
├── types/              # Types TypeScript globaux (ex: ProductType)
└── App.tsx             # Point d'entrée React
```

---

## 🔗 Intégration backend

Le backend repose sur **Express** et TypeScript. Pour le faire tourner :

```bash
cd ../api
pnpm install
pnpm dev
```

L’API doit être accessible depuis le frontend (ex: `http://localhost:3000/products`). Assurez-vous que les routes correspondent bien à celles utilisées dans les hooks (axios).

---

## ✅ Linting

Pour vérifier le code avec ESLint :

```bash
pnpm lint
```

---

## 🧪 TODO (prochaines étapes)

- Authentification / gestion des sessions
- Pagination côté client ou serveur
- Notifications ou toasts pour les actions (ex: produit créé)
- Amélioration de l’UX/UI (ajout de styles)

---

## 📃 Licence

Ce projet est open-source et libre d’utilisation pour vos projets personnels ou professionnels.
