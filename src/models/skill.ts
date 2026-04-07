export interface Skill {
  name: string
  icon: string
  mastered_subskills?: string[] | null
  learning_subskills?: string[] | null
  projects?: string[] | null
}
export const language_skills: Skill[] = [
  {
    name: 'Rust',
    icon: 'rust.svg',
    mastered_subskills: ['Ownership', 'Error Handling', 'Async/Await'],
    learning_subskills: ['Embedded'],
    projects: ['Warpinator Lib', 'Warpinator Tauri', 'Polybius', 'BeTalk'],
  },
  {
    name: 'C/C++',
    icon: 'cpp.svg',
    mastered_subskills: ['Dynamic Memory', 'Pointers', 'Data Structures'],
    learning_subskills: ['Build Systems'],
    projects: ['Qube2Space'],
  },
  {
    name: 'Kotlin',
    icon: 'kotlin.svg',
    mastered_subskills: ['Coroutines', 'Android Development'],
    projects: ['BeTalk', 'Warpinator Android'],
  },
  {
    name: 'Dart',
    icon: 'dart.svg',
    mastered_subskills: ['Null Safety', 'OOP', 'Functional Programming', 'Streams'],
    learning_subskills: ['FFI'],
    projects: ['BeTalk', 'flutter-master-detail-flow'],
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
    name: 'Python',
    icon: 'python.svg',
    projects: ['ML Song Genre Classifier'],
  },
]

export const framework_skills: Skill[] = [
  {
    name: 'Flutter',
    icon: 'flutter.svg',
    mastered_subskills: ['Animations', 'State Management', 'Networking'],
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
    name: 'Embedded Systems',
    icon: 'embedded.svg',
    mastered_subskills: ['Assembly (16-bit)', 'i2c', 'Microcontroller Programming', 'Memory'],
    learning_subskills: ['Rust Embedded', 'Real-Time Operating Systems', 'ARM'],
    projects: ['Qube2Space'],
  },
  {
    name: 'Android Development',
    icon: 'android.svg',
    mastered_subskills: ['Jetpack Compose', 'Testing'],
    projects: ['Warpinator Android', 'Petrichor'],
  },
  {
    name: 'Desktop Development',
    icon: 'desktop.svg',
    mastered_subskills: ['Cross-platform Development', 'Tauri'],
    learning_subskills: ['Rust Iced'],
    projects: ['Warpinator Tauri'],
  },
  {
    name: 'Web Development',
    icon: 'web.svg',
    mastered_subskills: ['HTML', 'TailwindCSS', 'Responsive Design', 'SEO', 'Accessibility'],
    learning_subskills: ['PWA', 'WebAssembly'],
    projects: ['Polybius', 'My Portfolio', '2-5-perceivers.github.io'],
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
    projects: ['Warpinator Android', 'Warpinator Lib'],
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
