// Translation dictionaries
const translations = {
    en: {
        page_title: "Data Analytics - Smart Cradle",
        brand_name: "Smart Cradle",
        export_data: "Export Data",
        nav_dashboard: "Dashboard",
        nav_vital_signs: "Vital Signs",
        nav_trends: "Trends",
        nav_analytics: "Analytics",
        nav_alerts: "Alerts",
        nav_history: "History",
        nav_settings: "Settings",
        main_title: "Data Analytics Dashboard",
        analysis_period: "Analysis Period:",
        range_7d: "7 Days",
        range_30d: "30 Days",
        range_90d: "90 Days",
        range_1y: "1 Year",
        avg_heart_rate: "Avg Heart Rate",
        avg_temperature: "Avg Temperature",
        sleep_quality: "Sleep Quality",
        total_alerts: "Total Alerts",
        change_from_last: "+2.3% from last period",
        stable: "Stable",
        improved: "+5.2% improved",
        decreased: "-12% decreased",
        vital_signs_trends: "Vital Signs Trends",
        heart_rate: "Heart Rate",
        temperature: "Temperature",
        breathing: "Breathing",
        sleep_patterns: "Sleep Patterns",
        avg_sleep_duration: "Avg Sleep Duration:",
        deep_sleep_ratio: "Deep Sleep Ratio:",
        sleep_efficiency: "Sleep Efficiency:",
        growth_tracking: "Growth Tracking",
        weight_percentile: "Weight Percentile:",
        height_percentile: "Height Percentile:",
        alert_analysis: "Alert Analysis",
        temperature_alerts: "Temperature Alerts: 8",
        heart_rate_alerts: "Heart Rate Alerts: 5",
        breathing_alerts: "Breathing Alerts: 3",
        movement_alerts: "Movement Alerts: 7",
        activity_heatmap: "Daily Activity Heatmap",
        heatmap_description: "Shows baby's activity levels throughout the day",
        low_activity: "Low Activity",
        high_activity: "High Activity",
        health_score: "Overall Health Score",
        excellent: "Excellent",
        vital_signs_score: "Vital Signs:",
        sleep_score: "Sleep Quality:",
        activity_score: "Activity Level:",
        insights_recommendations: "AI Insights & Recommendations",
        key_insights: "Key Insights",
        recommendations: "Recommendations",
        insight_1: "Sleep patterns have improved by 15% over the last month",
        insight_2: "Heart rate variability is within normal ranges",
        insight_3: "Slight increase in temperature alerts during evening hours",
        recommendation_1: "Consider adjusting room temperature in the evening",
        recommendation_2: "Maintain current feeding schedule - it's working well",
        recommendation_3: "Schedule pediatric checkup to discuss growth trends",
        export_options: "Data Export Options",
        export_pdf: "Export PDF Report",
        export_excel: "Export Excel Data",
        export_csv: "Export CSV Data",
        export_json: "Export JSON Data"
    },
    fr: {
        page_title: "Analyse des Données - Smart Cradle",
        brand_name: "Smart Cradle",
        export_data: "Exporter les Données",
        nav_dashboard: "Tableau de Bord",
        nav_vital_signs: "Signes Vitaux",
        nav_trends: "Tendances",
        nav_analytics: "Analyses",
        nav_alerts: "Alertes",
        nav_history: "Historique",
        nav_settings: "Paramètres",
        main_title: "Tableau de Bord d'Analyse des Données",
        analysis_period: "Période d'Analyse:",
        range_7d: "7 Jours",
        range_30d: "30 Jours",
        range_90d: "90 Jours",
        range_1y: "1 An",
        avg_heart_rate: "Fréquence Cardiaque Moy.",
        avg_temperature: "Température Moyenne",
        sleep_quality: "Qualité du Sommeil",
        total_alerts: "Total des Alertes",
        change_from_last: "+2,3% par rapport à la période précédente",
        stable: "Stable",
        improved: "+5,2% amélioré",
        decreased: "-12% diminué",
        vital_signs_trends: "Tendances des Signes Vitaux",
        heart_rate: "Fréquence Cardiaque",
        temperature: "Température",
        breathing: "Respiration",
        sleep_patterns: "Modèles de Sommeil",
        avg_sleep_duration: "Durée Moy. du Sommeil:",
        deep_sleep_ratio: "Ratio Sommeil Profond:",
        sleep_efficiency: "Efficacité du Sommeil:",
        growth_tracking: "Suivi de la Croissance",
        weight_percentile: "Percentile de Poids:",
        height_percentile: "Percentile de Taille:",
        alert_analysis: "Analyse des Alertes",
        temperature_alerts: "Alertes de Température: 8",
        heart_rate_alerts: "Alertes Fréquence Cardiaque: 5",
        breathing_alerts: "Alertes Respiration: 3",
        movement_alerts: "Alertes Mouvement: 7",
        activity_heatmap: "Carte de Chaleur d'Activité Quotidienne",
        heatmap_description: "Montre les niveaux d'activité du bébé tout au long de la journée",
        low_activity: "Faible Activité",
        high_activity: "Haute Activité",
        health_score: "Score de Santé Global",
        excellent: "Excellent",
        vital_signs_score: "Signes Vitaux:",
        sleep_score: "Qualité du Sommeil:",
        activity_score: "Niveau d'Activité:",
        insights_recommendations: "Insights IA et Recommandations",
        key_insights: "Insights Clés",
        recommendations: "Recommandations",
        insight_1: "Les modèles de sommeil se sont améliorés de 15% le mois dernier",
        insight_2: "La variabilité de la fréquence cardiaque est dans les normes",
        insight_3: "Légère augmentation des alertes de température en soirée",
        recommendation_1: "Envisager d'ajuster la température de la pièce le soir",
        recommendation_2: "Maintenir l'horaire d'alimentation actuel - il fonctionne bien",
        recommendation_3: "Programmer un contrôle pédiatrique pour discuter des tendances de croissance",
        export_options: "Options d'Exportation des Données",
        export_pdf: "Exporter Rapport PDF",
        export_excel: "Exporter Données Excel",
        export_csv: "Exporter Données CSV",
        export_json: "Exporter Données JSON"
    },
    ar: {
        page_title: "تحليل البيانات - المهد الذكي",
        brand_name: "المهد الذكي",
        export_data: "تصدير البيانات",
        nav_dashboard: "لوحة التحكم",
        nav_vital_signs: "العلامات الحيوية",
        nav_trends: "الاتجاهات",
        nav_analytics: "التحليلات",
        nav_alerts: "التنبيهات",
        nav_history: "التاريخ",
        nav_settings: "الإعدادات",
        main_title: "لوحة تحليل البيانات",
        analysis_period: "فترة التحليل:",
        range_7d: "7 أيام",
        range_30d: "30 يوم",
        range_90d: "90 يوم",
        range_1y: "سنة واحدة",
        avg_heart_rate: "متوسط معدل ضربات القلب",
        avg_temperature: "متوسط درجة الحرارة",
        sleep_quality: "جودة النوم",
        total_alerts: "إجمالي التنبيهات",
        change_from_last: "+2.3% من الفترة الماضية",
        stable: "مستقر",
        improved: "+5.2% تحسن",
        decreased: "-12% انخفض",
        vital_signs_trends: "اتجاهات العلامات الحيوية",
        heart_rate: "معدل ضربات القلب",
        temperature: "درجة الحرارة",
        breathing: "التنفس",
        sleep_patterns: "أنماط النوم",
        avg_sleep_duration: "متوسط مدة النوم:",
        deep_sleep_ratio: "نسبة النوم العميق:",
        sleep_efficiency: "كفاءة النوم:",
        growth_tracking: "تتبع النمو",
        weight_percentile: "المئوية للوزن:",
        height_percentile: "المئوية للطول:",
        alert_analysis: "تحليل التنبيهات",
        temperature_alerts: "تنبيهات درجة الحرارة: 8",
        heart_rate_alerts: "تنبيهات معدل ضربات القلب: 5",
        breathing_alerts: "تنبيهات التنفس: 3",
        movement_alerts: "تنبيهات الحركة: 7",
        activity_heatmap: "خريطة النشاط اليومي الحرارية",
        heatmap_description: "تظهر مستويات نشاط الطفل طوال اليوم",
        low_activity: "نشاط منخفض",
        high_activity: "نشاط عالي",
        health_score: "نقاط الصحة الإجمالية",
        excellent: "ممتاز",
        vital_signs_score: "العلامات الحيوية:",
        sleep_score: "جودة النوم:",
        activity_score: "مستوى النشاط:",
        insights_recommendations: "رؤى الذكاء الاصطناعي والتوصيات",
        key_insights: "الرؤى الرئيسية",
        recommendations: "التوصيات",
        insight_1: "تحسنت أنماط النوم بنسبة 15% خلال الشهر الماضي",
        insight_2: "تقلبات معدل ضربات القلب ضمن المعدلات الطبيعية",
        insight_3: "زيادة طفيفة في تنبيهات درجة الحرارة خلال ساعات المساء",
        recommendation_1: "فكر في تعديل درجة حرارة الغرفة في المساء",
        recommendation_2: "حافظ على جدول الرضاعة الحالي - إنه يعمل بشكل جيد",
        recommendation_3: "حدد موعد فحص طب الأطفال لمناقشة اتجاهات النمو",
        export_options: "خيارات تصدير البيانات",
        export_pdf: "تصدير تقرير PDF",
        export_excel: "تصدير بيانات Excel",
        export_csv: "تصدير بيانات CSV",
        export_json: "تصدير بيانات JSON"
    }
};

// Global variables
let currentLang = localStorage.getItem('language') || 'en';
let currentRange = 30;
let charts = {};

// Language change function
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language selector
    const languageNames = {
        'en': 'English',
        'fr': 'Français',
        'ar': 'العربية'
    };
    
    document.getElementById('currentLanguage').textContent = languageNames[lang];
    document.getElementById('currentFlag').className = `language-flag flag-${lang}`;
    
    // Update charts if they exist
    updateAllChartLabels(lang);
}

// Generate sample data
function generateSampleData(days) {
    const data = [];
    const now = new Date();
    
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
        data.push({
            date: date,
            heartRate: 120 + Math.random() * 25 + Math.sin(i * 0.1) * 10,
            temperature: 36.4 + Math.random() * 0.8 + Math.sin(i * 0.2) * 0.3,
            breathing: 35 + Math.random() * 20 + Math.sin(i * 0.15) * 5,
            oxygen: 96 + Math.random() * 3,
            sleepQuality: 70 + Math.random() * 25,
            weight: 5.2 + (i * 0.01) + Math.random() * 0.1,
            height: 58 + (i * 0.02) + Math.random() * 0.5
        });
    }
    
    return data.reverse();
}

// Initialize Vital Signs Trends Chart
function initVitalTrendsChart() {
    const ctx = document.getElementById('vitalTrendsChart').getContext('2d');
    const data = generateSampleData(currentRange);
    
    charts.vitalTrends = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.date.toLocaleDateString()),
            datasets: [
                {
                    label: 'Heart Rate (BPM)',
                    data: data.map(d => d.heartRate),
                    borderColor: '#E74C3C',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)',
                    tension: 0.4,
                    hidden: false
                },
                {
                    label: 'Temperature (°C)',
                    data: data.map(d => d.temperature),
                    borderColor: '#F39C12',
                    backgroundColor: 'rgba(243, 156, 18, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1',
                    hidden: false
                },
                {
                    label: 'Breathing Rate',
                    data: data.map(d => d.breathing),
                    borderColor: '#3498DB',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    hidden: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: 0,
                    max: 200
                },
                y1: {
                    type: 'linear',
                    display: false,
                    position: 'right',
                    min: 35,
                    max: 39,
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Initialize Sleep Pattern Chart
function initSleepPatternChart() {
    const ctx = document.getElementById('sleepPatternChart').getContext('2d');
    
    charts.sleepPattern = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Deep Sleep', 'Light Sleep', 'REM Sleep', 'Awake'],
            datasets: [{
                data: [68, 20, 8, 4],
                backgroundColor: [
                    '#27AE60',
                    '#3498DB',
                    '#9B59B6',
                    '#E74C3C'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

// Initialize Growth Chart
function initGrowthChart() {
    const ctx = document.getElementById('growthChart').getContext('2d');
    const data = generateSampleData(currentRange);
    
    charts.growth = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.date.toLocaleDateString()),
            datasets: [
                {
                    label: 'Weight (kg)',
                    data: data.map(d => d.weight),
                    borderColor: '#27AE60',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y'
                },
                {
                    label: 'Height (cm)',
                    data: data.map(d => d.height),
                    borderColor: '#3498DB',
                    backgroundColor: 'rgba(52, 152, 219, 0.1)',
                    tension: 0.4,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    title: {
                        display: true,
                        text: 'Weight (kg)'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    title: {
                        display: true,
                        text: 'Height (cm)'
                    },
                    grid: {
                        drawOnChartArea: false,
                    },
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

// Initialize Alert Chart
function initAlertChart() {
    const ctx = document.getElementById('alertChart').getContext('2d');
    
    charts.alerts = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Temperature', 'Heart Rate', 'Breathing', 'Movement'],
            datasets: [{
                label: 'Alert Count',
                data: [8, 5, 3, 7],
                backgroundColor: [
                    '#F39C12',
                    '#E74C3C',
                    '#3498DB',
                    '#27AE60'
                ],
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
}

// Initialize Health Score Gauge
function initHealthScoreGauge() {
    const canvas = document.getElementById('healthScoreGauge');
    const ctx = canvas.getContext('2d');
    const score = 92;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw gauge background
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0.75 * Math.PI, 2.25 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#e9ecef';
    ctx.stroke();
    
    // Draw gauge fill
    const fillAngle = 0.75 * Math.PI + (score / 100) * 1.5 * Math.PI;
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0.75 * Math.PI, fillAngle);
    ctx.lineWidth = 15;
    ctx.strokeStyle = score >= 90 ? '#27AE60' : score >= 70 ? '#F39C12' : '#E74C3C';
    ctx.stroke();
}

// Initialize Activity Heatmap
function initActivityHeatmap() {
    const container = document.getElementById('activityHeatmap');
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    // Clear container
    container.innerHTML = '';
    
    // Generate heatmap cells
    for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
            const cell = document.createElement('div');
            cell.className = 'heatmap-cell';
            
            // Generate random activity level (0-1)
            const activity = Math.random();
            const intensity = Math.floor(activity * 5);
            
            // Set color based on activity level
            const colors = ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5'];
            cell.style.backgroundColor = colors[intensity];
            
            // Add tooltip
            cell.title = `${days[day]} ${hour}:00 - Activity: ${Math.round(activity * 100)}%`;
            
            container.appendChild(cell);
        }
    }
}

// Update chart data based on time range
function updateChartsForRange(days) {
    currentRange = days;
    
    // Update vital trends chart
    if (charts.vitalTrends) {
        const data = generateSampleData(days);
        charts.vitalTrends.data.labels = data.map(d => d.date.toLocaleDateString());
        charts.vitalTrends.data.datasets[0].data = data.map(d => d.heartRate);
        charts.vitalTrends.data.datasets[1].data = data.map(d => d.temperature);
        charts.vitalTrends.data.datasets[2].data = data.map(d => d.breathing);
        charts.vitalTrends.update();
    }
    
    // Update growth chart
    if (charts.growth) {
        const data = generateSampleData(days);
        charts.growth.data.labels = data.map(d => d.date.toLocaleDateString());
        charts.growth.data.datasets[0].data = data.map(d => d.weight);
        charts.growth.data.datasets[1].data = data.map(d => d.height);
        charts.growth.update();
    }
    
    // Update analysis period text
    const periodTexts = {
        7: 'Last 7 Days',
        30: 'Last 30 Days',
        90: 'Last 90 Days',
        365: 'Last Year'
    };
    document.getElementById('analysisPeriod').textContent = periodTexts[days];
}

// Update all chart labels for language
function updateAllChartLabels(lang) {
    // This would update chart labels based on language
    // Implementation depends on specific chart library features
}

// Chart control handlers
function setupChartControls() {
    // Vital signs chart toggles
    document.getElementById('showHeartRate').addEventListener('change', function() {
        if (charts.vitalTrends) {
            charts.vitalTrends.data.datasets[0].hidden = !this.checked;
            charts.vitalTrends.update();
        }
    });
    
    document.getElementById('showTemperature').addEventListener('change', function() {
        if (charts.vitalTrends) {
            charts.vitalTrends.data.datasets[1].hidden = !this.checked;
            charts.vitalTrends.update();
        }
    });
    
    document.getElementById('showBreathing').addEventListener('change', function() {
        if (charts.vitalTrends) {
            charts.vitalTrends.data.datasets[2].hidden = !this.checked;
            charts.vitalTrends.update();
        }
    });
}

// Export data functions
function exportData(format) {
    const exportMessages = {
        en: {
            pdf: 'PDF report exported successfully!',
            excel: 'Excel data exported successfully!',
            csv: 'CSV data exported successfully!',
            json: 'JSON data exported successfully!'
        },
        fr: {
            pdf: 'Rapport PDF exporté avec succès!',
            excel: 'Données Excel exportées avec succès!',
            csv: 'Données CSV exportées avec succès!',
            json: 'Données JSON exportées avec succès!'
        },
        ar: {
            pdf: 'تم تصدير تقرير PDF بنجاح!',
            excel: 'تم تصدير بيانات Excel بنجاح!',
            csv: 'تم تصدير بيانات CSV بنجاح!',
            json: 'تم تصدير بيانات JSON بنجاح!'
        }
    };
    
    // Simulate export process
    setTimeout(() => {
        alert(exportMessages[currentLang][format]);
    }, 1000);
}

// Event listeners
function initializeEventListeners() {
    // Time range selector
    document.querySelectorAll('[data-range]').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('[data-range]').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            updateChartsForRange(parseInt(this.dataset.range));
        });
    });
    
    // Sidebar navigation
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Setup chart controls
    setupChartControls();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all charts
    initVitalTrendsChart();
    initSleepPatternChart();
    initGrowthChart();
    initAlertChart();
    initHealthScoreGauge();
    initActivityHeatmap();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Apply saved language
    changeLanguage(currentLang);
    
    // Add fade-in animation to cards
    document.querySelectorAll('.metric-card, .analytics-card').forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
    });
});

// Handle window resize for responsive charts
window.addEventListener('resize', function() {
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') {
            chart.resize();
        }
    });
    
    // Reinitialize health score gauge on resize
    initHealthScoreGauge();
});

// Update metrics periodically (simulate real-time updates)
setInterval(() => {
    // Update metric values with slight variations
    const heartRateElement = document.getElementById('avgHeartRate');
    const tempElement = document.getElementById('avgTemperature');
    const sleepElement = document.getElementById('avgSleepQuality');
    const alertsElement = document.getElementById('totalAlerts');
    const healthScoreElement = document.getElementById('healthScore');
    
    if (heartRateElement) {
        const currentHR = parseInt(heartRateElement.textContent);
        const newHR = currentHR + Math.floor(Math.random() * 6) - 3; // ±3 variation
        heartRateElement.textContent = Math.max(120, Math.min(150, newHR)) + ' BPM';
    }
    
    if (tempElement) {
        const currentTemp = parseFloat(tempElement.textContent);
        const newTemp = currentTemp + (Math.random() * 0.4) - 0.2; // ±0.2 variation
        tempElement.textContent = Math.max(36.0, Math.min(37.5, newTemp)).toFixed(1) + '°C';
    }
    
    if (sleepElement) {
        const currentSleep = parseInt(sleepElement.textContent);
        const newSleep = currentSleep + Math.floor(Math.random() * 6) - 3; // ±3 variation
        sleepElement.textContent = Math.max(70, Math.min(100, newSleep)) + '%';
    }
    
    if (healthScoreElement) {
        const currentScore = parseInt(healthScoreElement.textContent);
        const newScore = currentScore + Math.floor(Math.random() * 4) - 2; // ±2 variation
        const finalScore = Math.max(85, Math.min(100, newScore));
        healthScoreElement.textContent = finalScore;
        
        // Update health score gauge
        initHealthScoreGauge();
        
        // Update score label
        const scoreLabel = document.querySelector('.score-label');
        if (scoreLabel) {
            if (finalScore >= 90) {
                scoreLabel.textContent = translations[currentLang].excellent || 'Excellent';
            } else if (finalScore >= 80) {
                scoreLabel.textContent = 'Good';
            } else {
                scoreLabel.textContent = 'Fair';
            }
        }
    }
}, 30000); // Update every 30 seconds