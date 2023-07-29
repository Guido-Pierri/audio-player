import { createClient } from '@supabase/supabase-js'

// const URL = 'https://qfwsxhfbzopxzfjdxwqg.supabase.co'
// const ANNON_PUBLIC_SECRET =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmd3N4aGZiem9weHpmamR4d3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzNTY4NzQsImV4cCI6MjAwNTkzMjg3NH0.ijxQSxW8CH8DAE-U5BdHR232UMOR_kx-sMKIhU7CidY'
console.log('supabase')
export const supabase = createClient(
  'https://qfwsxhfbzopxzfjdxwqg.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmd3N4aGZiem9weHpmamR4d3FnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MDM1Njg3NCwiZXhwIjoyMDA1OTMyODc0fQ.b2SIv7X9GF-HIcUCuBhOfJTYWaETbIUk8GrBLy3abcQ'
)
