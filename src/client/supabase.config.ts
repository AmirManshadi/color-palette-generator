import { createClient } from "@supabase/supabase-js"

const supabaseUrl: string = import.meta.env.VITE_PROJECT_URL as string
const supabaseKey: string = import.meta.env.VITE_PROJECT_API_KEY as string
const supabase = createClient(supabaseUrl, supabaseKey) as object

export default supabase
