class EngineLogger:
    def info(self, *args, **kwargs):
        pass

    def warning(self, *args, **kwargs):
        pass


class DefaultLogger(EngineLogger):
    def info(self, *args, **kwargs):
        print(*args, **kwargs)

    def warning(self, *args, **kwargs):
        print(*args, **kwargs)
