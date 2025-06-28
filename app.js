const correctPassword = "2000"; // グループのパスワードを設定

// パスワードの確認
function checkPassword() {
  const inputPassword = document.getElementById('password').value;
  if (inputPassword === correctPassword) {
    document.getElementById('passwordPage').style.display = 'none';  // ログイン画面を隠す
    document.getElementById('boardPage').style.display = 'block';    // 掲示板を表示
  } else {
    alert('パスワードが間違っています');
  }
}

let posts = [];

// メッセージを投稿する
function post() {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('msg').value.trim();

  if (!name || !message) return alert('名前とメッセージを入力してください');

  posts.push({ name, message, timestamp: new Date() });
  document.getElementById('name').value = '';
  document.getElementById('msg').value = '';
  load();
}

// 投稿を表示する
function load() {
  const log = document.getElementById('log');
  log.innerHTML = '';
  posts.reverse().forEach(post => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${post.name}</strong>: ${post.message} <span>(${new Date(post.timestamp).toLocaleString()})</span>`;
    log.appendChild(li);
  });
}

load();

