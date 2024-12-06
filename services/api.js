import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ysozsbkhqhbylxmuxhdt.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzb3pzYmtocWhieWx4bXV4aGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MTA0OTgsImV4cCI6MjA0OTA4NjQ5OH0.zfwgQYU5joT0nsaNIWsV-D_HxnKQ0Eqrmh0aXf0Fm-g",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlzb3pzYmtocWhieWx4bXV4aGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MTA0OTgsImV4cCI6MjA0OTA4NjQ5OH0.zfwgQYU5joT0nsaNIWsV-D_HxnKQ0Eqrmh0aXf0Fm-g"
    }
})