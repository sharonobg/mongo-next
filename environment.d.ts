declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GA_PROPERTY_ID: string,
      MONGO_URI: string,
      MONGODB_URI:string,
      TOKEN_SECRET:string,
      MAILUSER:string,
      MAILPW:string,
      NEXTAUTH_SECRET:string,
      NEXTAUTH_URL:string,
      GITHUB_ID:string,
      GITHUB_SECRET:string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
