export interface Skill {
  name: string
  icon: string
  mastered_subskills?: string[] | null
  learning_subskills?: string[] | null
  projects?: string[] | null
}
export const language_skills: Skill[] = [
  {
    name: 'C/C++',
    icon: 'cpp.svg',
    mastered_subskills: ['Dynamic Memory', 'Pointers', 'Data Structures'],
    learning_subskills: ['Threading', 'Build Systems'],
    projects: ['Qube2Space'],
  },
  {
    name: 'Dart',
    icon: 'dart.svg',
    mastered_subskills: ['Null Safety', 'OOP', 'Functional Programming', 'Streams'],
    learning_subskills: ['Testing'],
    projects: ['BeTalk', 'flutter-master-detail-flow'],
  },
  {
    name: 'Rust',
    icon: 'rust.svg',
    mastered_subskills: ['Ownership', 'Error Handling', 'Testing', 'Cargo'],
    learning_subskills: ['Async/Await', 'Tokyo'],
    projects: ['Polybius', 'BeTalk', 'Rust Hangman'],
  },
  {
    name: 'Go',
    icon: 'go.svg',
    mastered_subskills: ['Concurrency', 'APIs', 'Modules'],
    learning_subskills: ['Advanced Concurrency Patterns'],
  },
  {
    name: 'TypeScript',
    icon: 'typescript.svg',
    projects: ['My Portfolio', '2-5-perceivers.github.io'],
  },
  {
    name: 'Kotlin',
    icon: 'kotlin.svg',
    projects: ['BeTalk', 'Warpinator Android'],
  },
  {
    name: 'Python',
    icon: 'python.svg',
    projects: ['ML Song Genre Classifier'],
  },
]

export const framework_skills: Skill[] = [
  {
    name: 'Flutter',
    icon: 'flutter.svg',
    mastered_subskills: ['Material Design', 'Themeing', 'State Management', 'Networking'],
    learning_subskills: ['Animations', 'Custom Paint'],
    projects: ['Flutter packages', 'BeTalk'],
  },
  {
    name: 'Vue.js',
    icon: 'vue.svg',
    mastered_subskills: ['Components', 'Routing', 'Deployment'],
    projects: ['My Portfolio', '2-5-perceivers.github.io'],
  },
  {
    name: 'Fresh',
    icon: 'fresh.svg',
  },
  {
    name: 'PyTorch',
    icon: 'pytorch.svg',
    learning_subskills: ['Model types', 'Training', 'Deployment'],
    projects: ['ML Song Genre Classifier'],
  },
]

export const platforms_skills: Skill[] = [
  {
    name: 'Web Development',
    icon: 'web.svg',
    mastered_subskills: ['HTML', 'TailwindCSS', 'Responsive Design', 'SEO', 'Accessibility'],
    learning_subskills: ['PWA', 'WebAssembly'],
    projects: ['Polybius', 'My Portfolio', '2-5-perceivers.github.io'],
  },
  {
    name: 'Android Development',
    icon: 'android.svg',
    learning_subskills: ['Jetpack Compose', 'Testing'],
    projects: ['Warpinator Android', 'Petrichor'],
  },
]

export const technologies_skills: Skill[] = [
  {
    name: 'Machine Learning',
    icon: 'ml.svg',
    mastered_subskills: ['Supervised Learning', 'CNNs'],
    learning_subskills: ['Unsupervised Learning', 'Model Optimization'],
    projects: ['ML Song Genre Classifier'],
  },
  {
    name: 'REST APIs',
    icon: 'rest.svg',
    mastered_subskills: ['CRUD', 'Authentication', 'Pagination'],
  },
  {
    name: 'gRPC',
    icon: 'grpc.svg',
  },
  {
    name: 'Databases',
    icon: 'database.svg',
    mastered_subskills: ['SQL', 'Database Design', 'PostgreSQL', 'SQLite'],
    learning_subskills: ['Redis'],
  },
  {
    name: 'Git & GitHub',
    icon: 'github.svg',
    mastered_subskills: ['Pull Requests', 'Issues', 'Repository Management', 'GitHub Actions'],
    projects: ['flutter-master-detail-flow'],
  },
  {
    name: 'Firebase',
    icon: 'firebase.svg',
  },
  {
    name: 'Supabase',
    icon: 'supabase.svg',
  },
]
