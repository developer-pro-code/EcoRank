import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://bmmrprstsymncljksbil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbXJwcnN0c3ltbmNsamtzYmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjE3NDYsImV4cCI6MjA3NDEzNzc0Nn0.YTirrcAk3wWje0-tLW-E7T6GNHBgBRPEoBI26uwUjrY')

export async function fetchLessons() {
  const { data, error } = await supabase
    .from('lessons')
    .select('*')

    if (error) {
    console.error('Error fetching lessons:', error)
    return []
  }


  return data
}

const result = await fetchLessons()
console.log(result)
