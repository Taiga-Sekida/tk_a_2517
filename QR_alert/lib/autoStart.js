// アプリケーション起動時にバックグラウンド監視を自動開始
import { getBackgroundMonitor } from './backgroundMonitor';

// サーバー起動時に監視システムを開始
if (typeof window === 'undefined') { // サーバーサイドでのみ実行
  console.log('🚀 QR_alert アプリケーション起動中...');
  
  // 少し待ってから監視システムを開始（アプリケーションの初期化完了後）
  setTimeout(() => {
    const monitor = getBackgroundMonitor();
    monitor.startMonitoring();
    console.log('🏭 工場監視システム: 自動起動完了');
  }, 5000); // 5秒後に開始
}
