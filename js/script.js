// ============================================================
// 智力测试中心 - 通用框架
// 支持：WAIS / WISC / Binet / Raven
// ============================================================

const optLabels = ['A', 'B', 'C', 'D', 'E', 'F'];

// ---- 测试注册表 ----
const TEST_REGISTRY = {
  wais: typeof TEST_WAIS !== 'undefined' ? TEST_WAIS : null,
  wisc: typeof TEST_WISC !== 'undefined' ? TEST_WISC : null,
  binet: typeof TEST_BINET !== 'undefined' ? TEST_BINET : null,
  raven: typeof TEST_RAVEN !== 'undefined' ? TEST_RAVEN : null
};

// ---- DOM refs ----
const $ = id => document.getElementById(id);
const pages = {
  selector: $('selector'),
  reminder: $('reminder'),
  quiz: $('quiz'),
  timeout: $('timeout'),
  result: $('result')
};
const els = {
  reminderIcon: $('reminderIcon'),
  reminderTitle: $('reminderTitle'),
  reminderList: $('reminderList'),
  categoryBadge: $('categoryBadge'),
  questionIndex: $('questionIndex'),
  timerDisplay: $('timerDisplay'),
  progressFill: $('progressFill'),
  questionText: $('questionText'),
  optionsContainer: $('optionsContainer'),
  questionNum: $('questionNum'),
  resultTitle: $('resultTitle'),
  resultIcon: $('resultIcon'),
  iqScore: $('iqScore'),
  iqLabel: $('iqLabel'),
  iqDesc: $('iqDesc'),
  iqRing: $('iqRing'),
  indexScoresSection: $('indexScoresSection'),
  indexSectionTitle: $('indexSectionTitle'),
  indexBarGroup: $('indexBarGroup'),
  detailList: $('detailList'),
  profileText: $('profileText'),
  recommendText: $('recommendText'),
  errorSummary: $('errorSummary'),
  errorList: $('errorList'),
  errorAnalysisSection: $('errorAnalysisSection')
};

// ---- State ----
let currentTest = null;      // test data object
let currentIndex = 0;
let answers = [];
let timeLeft = 0;
let timerInterval = null;
let isSubmitted = false;
let autoJumpTimer = null;

// ---- Helpers ----
function showPage(name) {
  Object.values(pages).forEach(p => p.classList.remove('active'));
  if (pages[name]) pages[name].classList.add('active');
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---- Timer ----
function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function updateTimerDisplay() {
  if (!els.timerDisplay) return;
  els.timerDisplay.textContent = formatTime(timeLeft);
  els.timerDisplay.className = 'timer';
  if (timeLeft <= 60) els.timerDisplay.classList.add('danger');
  else if (timeLeft <= 300) els.timerDisplay.classList.add('warning');
}

function startTimer() {
  if (timerInterval) return;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) { stopTimer(); handleTimeout(); }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
}

function handleTimeout() {
  if (isSubmitted) return;
  stopTimer();
  // Update i18n
  const timeoutTitle = document.querySelector('#timeout h2');
  const timeoutText = document.querySelector('#timeout .timeout-text');
  const timeoutBtn = $('timeoutResultBtn');
  if (timeoutTitle) timeoutTitle.textContent = t('timeout.title');
  if (timeoutText) timeoutText.textContent = t('timeout.text');
  if (timeoutBtn) timeoutBtn.textContent = t('timeout.viewResult');
  showPage('timeout');
}

// ---- Quiz ----
function initQuiz(testKey) {
  const testData = TEST_REGISTRY[testKey];
  if (!testData) { alert('测试数据加载失败'); return; }
  currentTest = testData;
  answers = testData.questions.map(() => -1);
  currentIndex = 0;
  timeLeft = testData.timeLimit || 1500;
  isSubmitted = false;
  stopTimer();
  if (autoJumpTimer) { clearTimeout(autoJumpTimer); autoJumpTimer = null; }
}

function renderQuestion() {
  if (!currentTest) return;
  const q = currentTest.questions[currentIndex];
  const total = currentTest.questions.length;

  // Category badge
  if (els.categoryBadge) {
    if (q.type && currentTest.indexConfig) {
      const cfg = currentTest.indexConfig[q.type];
      els.categoryBadge.textContent = (cfg ? cfg.short || q.type : q.type) + ' · ' + (q.subtest || '');
      els.categoryBadge.style.display = 'inline';
    } else if (q.subtest) {
      els.categoryBadge.textContent = q.subtest;
      els.categoryBadge.style.display = 'inline';
    } else {
      els.categoryBadge.style.display = 'none';
    }
  }

  if (els.questionIndex) els.questionIndex.textContent = `${currentIndex + 1} / ${total}`;
  if (els.progressFill) els.progressFill.style.width = `${((currentIndex + 1) / total) * 100}%`;
  if (els.questionNum) els.questionNum.textContent = t('quiz.question', { n: currentIndex + 1 });
  if (els.questionText) els.questionText.textContent = q.question;

  // Options
  if (els.optionsContainer) {
    els.optionsContainer.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'option' + (answers[currentIndex] === i ? ' selected' : '');
      const label = q.options.length <= 6 ? optLabels[i] + '. ' : '';
      btn.textContent = label + opt;
      btn.addEventListener('click', () => selectOption(i));
      els.optionsContainer.appendChild(btn);
    });
  }

  const prevBtn = $('prevBtn');
  if (prevBtn) prevBtn.disabled = currentIndex === 0;
}

function selectOption(index) {
  answers[currentIndex] = index;
  document.querySelectorAll('.option').forEach((el, i) => el.classList.toggle('selected', i === index));
  // 自动跳转下一题
  if (autoJumpTimer) clearTimeout(autoJumpTimer);
  autoJumpTimer = setTimeout(() => {
    autoJumpTimer = null;
    if (currentIndex === currentTest.questions.length - 1) {
      submitQuiz();
    } else {
      currentIndex++;
      renderQuestion();
    }
  }, 300);
}

function goNext() {
  if (answers[currentIndex] === -1) return;
  if (autoJumpTimer) clearTimeout(autoJumpTimer);
  if (currentIndex === currentTest.questions.length - 1) { submitQuiz(); return; }
  currentIndex++;
  renderQuestion();
}

function goPrev() {
  if (currentIndex === 0) return;
  if (autoJumpTimer) clearTimeout(autoJumpTimer);
  currentIndex--;
  renderQuestion();
}

function submitQuiz() {
  if (isSubmitted || !currentTest) return;
  isSubmitted = true;
  stopTimer();
  showResult();
}

// ---- Scoring ----
function calcScore() {
  if (!currentTest) return null;

  let totalRaw = 0;
  let correctCount = 0;
  let unanswered = 0;
  const maxRaw = currentTest.questions.reduce((s, q) => s + (q.points || 1), 0);

  const domains = {};
  if (currentTest.indexConfig) {
    for (const key of Object.keys(currentTest.indexConfig)) {
      domains[key] = { raw: 0, max: 0, correct: 0 };
    }
  }

  currentTest.questions.forEach((q, i) => {
    const pts = q.points || 1;
    if (q.type && domains[q.type]) {
      domains[q.type].max += pts;
    }

    if (answers[i] === -1) { unanswered++; return; }

    if (answers[i] === q.correct) {
      totalRaw += pts;
      correctCount++;
      if (q.type && domains[q.type]) {
        domains[q.type].raw += pts;
        domains[q.type].correct++;
      }
    }
  });

  // FSIQ: 0%→60, 50%→100, 100%→140
  const fsiq = Math.min(Math.max(Math.round(60 + (totalRaw / maxRaw) * 80), 40), 150);

  // Index scores
  const indexScores = {};
  if (currentTest.indexConfig) {
    for (const [key, data] of Object.entries(domains)) {
      const pct = data.max > 0 ? data.raw / data.max : 0;
      indexScores[key] = Math.min(Math.max(Math.round(60 + pct * 80), 40), 150);
    }
  }

  return { totalRaw, maxRaw, correctCount, unanswered, total: currentTest.questions.length, fsiq, indexScores, domains };
}

// ---- Results ----
function showResult() {
  const result = calcScore();
  if (!result) return;
  showPage('result');

  if (els.categoryBadge) els.categoryBadge.style.display = 'none';

  // i18n for result page
  if (els.resultTitle) els.resultTitle.textContent = currentTest.name + ' · ' + t('result.title');
  const fsiqLabel = document.getElementById('resultFsiqLabel');
  if (fsiqLabel) fsiqLabel.textContent = t('result.fsiq');
  const indexTitle = els.indexSectionTitle;
  if (indexTitle) indexTitle.textContent = t('result.indexTitle');
  const detailTitle = document.querySelector('.result-detail h4');
  if (detailTitle) detailTitle.textContent = t('result.detail');
  const errorTitle = document.getElementById('errorAnalysisTitle');
  if (errorTitle) errorTitle.textContent = t('result.errorAnalysis');
  const profileTitle = document.getElementById('profileTitle');
  if (profileTitle) profileTitle.textContent = t('result.profile');
  const backBtn = $('resultBackBtn');
  const restartBtn = $('restartBtn');
  if (backBtn) backBtn.textContent = t('result.back');
  if (restartBtn) restartBtn.textContent = t('result.restart');
  if (els.resultIcon) els.resultIcon.textContent = currentTest.icon || '🧠';

  // FSIQ ring
  const circumference = 326.73;
  const optRing = currentTest.ringMax || 150;
  setTimeout(() => {
    const offset = circumference - (result.fsiq / optRing) * circumference;
    if (els.iqRing) els.iqRing.style.strokeDashoffset = offset;
  }, 100);

  animateNumber(els.iqScore, result.fsiq);
  if (els.iqLabel) els.iqLabel.textContent = (currentTest.getLabel || defaultGetLabel)(result.fsiq);
  if (els.iqDesc) els.iqDesc.textContent = (currentTest.getDesc || defaultGetDesc)(result.fsiq);

  // Index scores
  if (els.indexScoresSection) {
    if (currentTest.indexConfig && currentTest.hasIndexes !== false) {
      els.indexScoresSection.style.display = 'block';
      if (els.indexSectionTitle) els.indexSectionTitle.textContent = currentTest.indexTitle || '各维度分数';
      if (els.indexBarGroup) {
        els.indexBarGroup.innerHTML = '';
        let delay = 300;
        for (const [key, cfg] of Object.entries(currentTest.indexConfig)) {
          const score = result.indexScores[key] || 0;
          const pct = Math.min((score / 150) * 100, 95);
          const label = cfg.label || key;
          const color = cfg.color || '#667eea';
          const short = cfg.short || key;

          const row = document.createElement('div');
          row.className = 'index-bar';
          row.innerHTML = `
            <span class="index-label">${label} <small>${short}</small></span>
            <div class="bar-track"><div class="bar-fill" style="width:0%;background:${color};transition-delay:${delay}ms"></div></div>
            <span class="index-score">${score}</span>
          `;
          els.indexBarGroup.appendChild(row);
          delay += 150;
        }
        // Trigger animation on next frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            els.indexBarGroup.querySelectorAll('.bar-fill').forEach((bar, i) => {
              const key = Object.keys(currentTest.indexConfig)[i];
              const pct = Math.min((result.indexScores[key] / 150) * 100, 95);
              bar.style.width = pct + '%';
            });
          });
        });
      }
    } else {
      els.indexScoresSection.style.display = 'none';
    }
  }

  // Detail list
  if (els.detailList) {
    els.detailList.innerHTML = '';
    currentTest.questions.forEach((q, i) => {
      const ans = answers[i];
      const isCorrect = ans === q.correct;
      const pts = q.points || 1;
      const cfg = currentTest.indexConfig && q.type ? currentTest.indexConfig[q.type] : null;

      const div = document.createElement('div');
      div.className = 'detail-item';

      let statusHtml = '';
      if (ans === -1) {
        statusHtml = '<span class="detail-wrong">' + t('detail.unanswered') + '</span>';
      } else if (isCorrect) {
        statusHtml = '<span class="detail-correct">' + t('detail.correct', { n: pts }) + '</span>';
      } else {
        statusHtml = '<span class="detail-wrong">' + t('detail.wrong', { user: optLabels[ans], correct: optLabels[q.correct] }) + '</span>';
      }

      div.innerHTML = `
        <span>
          ${cfg ? '<span style="color:'+cfg.color+';font-weight:600;font-size:11px;">'+cfg.short+'</span> · ' : ''}
          第${i + 1}题
        </span>
        ${statusHtml}
      `;
      els.detailList.appendChild(div);
    });
  }

  // Error analysis
  if (els.errorAnalysisSection) {
    const wrongItems = [];
    const errorByType = {};
    const errorByDifficulty = {};
    const errorsByDomain = {};

    currentTest.questions.forEach((q, i) => {
      const ans = answers[i];
      if (ans === -1 || ans === q.correct) return;
      wrongItems.push({ idx: i, question: q, userAnswer: ans });
      const t = q.type || 'general';
      errorByType[t] = (errorByType[t] || 0) + 1;
      const d = q.difficulty || '未知';
      errorByDifficulty[d] = (errorByDifficulty[d] || 0) + 1;
      if (q.type) errorsByDomain[q.type] = (errorsByDomain[q.type] || 0) + 1;
    });

    if (wrongItems.length === 0) {
      els.errorSummary.innerHTML = '<div style="text-align:center;padding:8px;color:#27ae60;font-weight:600;">' + t('error.allCorrect') + '</div>';
      els.errorList.innerHTML = '';
    } else {
      // Summary
      const answered = result.total - result.unanswered;
      const accuracy = answered > 0 ? Math.round((result.correctCount / answered) * 100) : 0;
      const nWrong = wrongItems.length;

      let sHtml = '<div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:6px;">';
      sHtml += '<div class="error-summary-stat"><span class="num green">' + result.correctCount + '</span><span class="label">' + t('error.correct') + '</span></div>';
      sHtml += '<div class="error-summary-stat"><span class="num red">' + nWrong + '</span><span class="label">' + t('error.wrong') + '</span></div>';
      sHtml += '<div class="error-summary-stat"><span class="num" style="color:#999">' + result.unanswered + '</span><span class="label">' + t('error.unanswered') + '</span></div>';
      sHtml += '<div class="error-summary-stat"><span class="num" style="color:#1a1a2e">' + result.total + '</span><span class="label">' + t('error.total') + '</span></div>';
      sHtml += '</div>';
      sHtml += '<div style="font-size:13px;color:#666;margin-bottom:6px;">' + t('error.accuracy', { p: accuracy, c: result.correctCount, a: answered }) + '</div>';

      // Tags
      if (Object.keys(errorByDifficulty).length > 0) {
        sHtml += '<div style="font-size:12px;color:#888;">' + t('error.difficulty') + '<span class="error-tag-group">';
        for (const [d, c] of Object.entries(errorByDifficulty)) {
          const cl = d === '易' ? '#27ae60' : (d === '中' || d === '中易' || d === '中难') ? '#e67e22' : '#e74c3c';
          sHtml += '<span class="error-tag" style="color:'+cl+';background:'+cl+'18">'+d+'：'+c+'题</span>';
        }
        sHtml += '</span></div>';
      }
      if (currentTest.indexConfig && Object.keys(errorsByDomain).length > 0) {
        sHtml += '<div style="font-size:12px;color:#888;margin-top:4px;">' + t('error.domain') + '<span class="error-tag-group">';
        for (const [t, c] of Object.entries(errorsByDomain)) {
          const cfg = currentTest.indexConfig[t];
          if (!cfg) continue;
          const cl = cfg.color;
          sHtml += '<span class="error-tag" style="color:'+cl+';background:'+cl+'18">'+cfg.short+'：'+c+'题</span>';
        }
        sHtml += '</span></div>';
      }
      els.errorSummary.innerHTML = sHtml;

      // Error list
      if (els.errorList) {
        const labels = ['A','B','C','D','E','F'];
        let lHtml = '';
        wrongItems.forEach(item => {
          const q = item.question;
          const ua = item.userAnswer;
          lHtml += '<div class="error-item">';
          lHtml += '<div class="e-header"><span>第'+(item.idx+1)+'题</span><span style="font-weight:400;font-size:12px;color:#999;">'+(q.difficulty||'')+'</span></div>';
          lHtml += '<div class="e-question">'+q.question.replace(/\n/g, '<br>')+'</div>';
          lHtml += '<div class="e-answers">';
          lHtml += t('error.yourAnswer') + '<span class="e-wrong-ans">'+labels[ua]+'. '+q.options[ua]+'</span><br>';
          lHtml += t('error.correctAnswer') + '<span class="e-correct-ans">'+labels[q.correct]+'. '+q.options[q.correct]+'</span>';
          lHtml += '</div>';
          if (q.explanation) lHtml += '<div class="e-explain">' + t('error.explanation') + q.explanation+'</div>';
          lHtml += '</div>';
        });

        lHtml += '<button class="error-toggle" id="errorToggleBtn">' + t('error.expand', { n: nWrong }) + '</button>';
        els.errorList.style.display = 'block';
        els.errorList.innerHTML = lHtml;

        const tBtn = $('errorToggleBtn');
        if (tBtn) {
          const items = els.errorList.querySelectorAll('.error-item');
          items.forEach(el => el.style.display = 'none');
          tBtn.addEventListener('click', () => {
            const hidden = items[0] && items[0].style.display === 'none';
            items.forEach(el => el.style.display = hidden ? '' : 'none');
            tBtn.textContent = hidden ? t('error.collapse') : t('error.expand', { n: nWrong });
          });
        }
      }
    }
  }

  // Profile & recommendation
  if (els.profileText) els.profileText.innerHTML = '<strong>' + t('profile.label') + '</strong>' +
    ((currentTest.getProfile || defaultGetProfile)(result, currentTest));
  if (els.recommendText) {
    const recLabel = currentLangCode === 'zh-CN' ? '发展建议：' :
                     currentLangCode === 'en' ? 'Recommendation: ' :
                     currentLangCode === 'es' ? 'Recomendación: ' :
                     currentLangCode === 'fr' ? 'Recommandation: ' :
                     currentLangCode === 'de' ? 'Empfehlung: ' :
                     currentLangCode === 'pt' ? 'Recomendação: ' :
                     currentLangCode === 'ru' ? 'Рекомендация: ' :
                     currentLangCode === 'ja' ? 'アドバイス：' :
                     currentLangCode === 'ko' ? '권장 사항: ' :
                     currentLangCode === 'ar' ? 'توصية: ' : 'Recommendation: ';
    els.recommendText.innerHTML = '<strong>' + recLabel + '</strong>' +
      ((currentTest.getRecommendation || defaultGetRecommendation)(result, currentTest));
  }
}

function animateNumber(el, target) {
  if (!el) return;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current;
  }, 30);
}

// ---- Default analysis functions ----
function defaultGetLabel(iq) {
  if (iq >= 130) return t('iq.veryHigh'); if (iq >= 120) return t('iq.high');
  if (iq >= 110) return t('iq.aboveAvg'); if (iq >= 90) return t('iq.average');
  if (iq >= 80) return t('iq.belowAvg'); if (iq >= 70) return t('iq.borderline');
  return t('iq.improve');
}
function defaultGetDesc(iq) {
  if (iq >= 130) return t('iq.desc.veryHigh');
  if (iq >= 120) return t('iq.desc.high');
  if (iq >= 110) return t('iq.desc.aboveAvg');
  if (iq >= 90) return t('iq.desc.average');
  if (iq >= 80) return t('iq.desc.belowAvg');
  if (iq >= 70) return t('iq.desc.borderline');
  return t('iq.desc.improve');
}
function defaultGetProfile(result) {
  if (!result.indexScores || Object.keys(result.indexScores).length === 0) {
    return t('profile.general');
  }
  const entries = Object.entries(result.indexScores).sort((a, b) => b[1] - a[1]);
  const highest = entries[0]; const lowest = entries[entries.length - 1];
  const gap = highest[1] - lowest[1];
  if (gap < 10) return t('profile.balanced');
  if (gap < 20) return t('profile.slightGap', { high: highest[0], low: lowest[0] });
  return t('profile.significantGap', { high: highest[0], hScore: highest[1], low: lowest[0], lScore: lowest[1], gap });
}
function defaultGetRecommendation(result) {
  if (result.fsiq >= 130) return t('rec.high');
  return t('rec.normal');
}

// ---- Set reminder ----
function setupReminder(testKey) {
  const testData = TEST_REGISTRY[testKey];
  if (!testData) return;

  if (els.reminderIcon) els.reminderIcon.textContent = testData.icon || '📋';
  if (els.reminderTitle) els.reminderTitle.textContent = testData.name + ' · ' + t('selector.title');

  const n = testData.questions.length;
  const minutes = Math.floor((testData.timeLimit || 1500) / 60);
  const items = [
    t('reminder.item1', { n }),
    t('reminder.item2', { n: minutes }),
    t('reminder.item3'),
    t('reminder.item4'),
    t('reminder.item5'),
    t('reminder.item6'),
    t('reminder.item7')
  ];

  if (els.reminderList) {
    els.reminderList.innerHTML = items.map(item => '<li>' + item + '</li>').join('');
  }

  // Update buttons
  const backBtn = $('backToSelectorBtn');
  const readyBtn = $('readyBtn');
  if (backBtn) backBtn.textContent = t('reminder.back');
  if (readyBtn) readyBtn.textContent = t('reminder.start');
}

// ---- i18n: render selector with current language ----
function renderSelector() {
  document.getElementById('selectorTitle').textContent = t('selector.title');
  document.getElementById('selectorSubtitle').textContent = t('selector.subtitle');
  document.querySelectorAll('.test-card').forEach(card => {
    const test = card.dataset.test;
    if (!test) return;
    const nameEl = card.querySelector('.test-card-name');
    const descEl = card.querySelector('.test-desc');
    const metaEl = card.querySelector('.test-meta');
    if (nameEl) nameEl.textContent = t(test + '.name');
    if (descEl) descEl.textContent = t(test + '.desc');
    if (metaEl) metaEl.innerHTML = t(test + '.meta');
    card.setAttribute('aria-label', t(test + '.name'));
  });
  // Affiliate section
  const affiliateTitle = document.querySelector('.affiliate-section h4');
  if (affiliateTitle) affiliateTitle.textContent = t('affiliate.title');
  document.querySelectorAll('.affiliate-tag').forEach(el => {
    el.textContent = t('affiliate.go');
  });
  // Lang label in the select
  // Update prev button
  const prevBtn = $('prevBtn');
  if (prevBtn && pages.quiz.classList.contains('active')) prevBtn.textContent = t('quiz.prev');
  // Update reminder buttons if visible
  const backBtn = $('backToSelectorBtn');
  const readyBtn = $('readyBtn');
  if (backBtn) backBtn.textContent = t('reminder.back');
  if (readyBtn) readyBtn.textContent = t('reminder.start');
}

// ---- Event listeners ----
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language selector
  const langSelect = document.getElementById('langSelect');
  if (langSelect) {
    SUPPORTED_LANGUAGES.forEach(lang => {
      const opt = document.createElement('option');
      opt.value = lang.code;
      opt.textContent = lang.name;
      langSelect.appendChild(opt);
    });
    langSelect.value = getCurrentLang();
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
  renderSelector();
  // Test card clicks
  document.querySelectorAll('.test-card').forEach(card => {
    card.addEventListener('click', () => {
      const key = card.dataset.test;
      if (!TEST_REGISTRY[key]) { alert('该测试暂时不可用'); return; }
      initQuiz(key);
      setupReminder(key);
      showPage('reminder');
    });
  });

  // Start quiz
  $('readyBtn').addEventListener('click', () => {
    showPage('quiz');
    renderQuestion();
    startTimer();
  });

  // Back to selector
  $('backToSelectorBtn').addEventListener('click', () => {
    stopTimer();
    showPage('selector');
  });

  // Navigation
  $('prevBtn').addEventListener('click', goPrev);
  $('homeBtn').addEventListener('click', () => {
    if (!currentTest) return;
    const answered = answers.filter(a => a !== -1).length;
    if (answered === 0 || confirm(t('home.confirm'))) {
      stopTimer();
      showPage('selector');
    }
  });

  // Timeout
  $('timeoutResultBtn').addEventListener('click', submitQuiz);

  // Restart / back
  $('restartBtn').addEventListener('click', () => {
    if (!currentTest) return;
    initQuiz(currentTest.id || 'wais');
    setupReminder(currentTest.id || 'wais');
    showPage('reminder');
    if (els.iqRing) els.iqRing.style.strokeDashoffset = 326.73;
  });

  $('resultBackBtn').addEventListener('click', () => {
    showPage('selector');
    if (els.iqRing) els.iqRing.style.strokeDashoffset = 326.73;
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!pages.quiz.classList.contains('active')) return;
    if (e.key === 'ArrowLeft' && !$('prevBtn').disabled) goPrev();
  });
});
